/*
    Copyright (c) 2016 Ariba, Inc.
    All rights reserved. Patents pending.

    Responsible: i855631 (arun.karthikeyan)
 */

'use strict';
var express = require('express');
var router = express.Router();
var debug = true;
// Loading Wit module
var Wit = require('node-wit').Wit;
var log = require('node-wit').log;

const WIT_TOKEN = 'GGAGXNYWOJDTPPHEPSZAGE4YJ44YAZ36';
const REST_API_URL = 'http://localhost:3000'; //mocked using simple-json server
const firstEntityValue = (entities, entity) => {
    const val = entities && entities[entity] &&
            Array.isArray(entities[entity]) &&
            entities[entity].length > 0 &&
            entities[entity][0].value
        ;
    if (!val) {
        return null;
    }
    return typeof val === 'object' ? val.value : val;
};

const sessions = {};

//create user session if it doesn't already exist
const findOrCreateSession = (socket) => {
    let sessionId;
    // Let's see if we already have a session for the user user_id
    Object.keys(sessions).forEach(k => {
        if (sessions[k].socket === socket) {
            // Yep, got it!
            sessionId = k;
        }
    });
    if (!sessionId) {
        // No session found for user user_id, let's create a new one
        sessionId = new Date().toISOString();
        sessions[sessionId] = {socket: socket, context: {}};
    }
    return sessionId;
};

const actions = {
  send(request, response) {
    const {sessionId, context, entities} = request;
    const {text, quickreplies} = response;
    let dataToSend = {};
    dataToSend.text=text;
    if(context.addComment){
      console.log('adding comment: '+context.addComment);
      dataToSend.addComment=context.addComment;
      delete context.addComment;
    }
    sessions[sessionId].socket.emit('chatReceived',dataToSend);
    return new Promise(function(resolve, reject) {
      return resolve();
    });
  },
  fetchInfo({context, entities}){
    if(debug){
    console.log('fetchInfo called');
  }
    return new Promise(function(resolve, reject) {
        
        var request_target = firstEntityValue(entities, 'request_target').toLowerCase();
	
        //request_target = request_target.charAt(0).toUpperCase() + request_target.slice(1);
        console.log('adding comment: ' + request_target);

        var request_target_name = firstEntityValue(entities, 'request_target_name').toLowerCase();
        var rank = 'five star', consistency = '.';
//        if('amazon'==request_target_name){
//          rank = 'low';
//          consistency = 'inconsistently';
//        }
//        else
//        if('microsoft'==request_target_name){
//          rank = 'high';
//          consistency='inconsistently';
//        }
//        else
//        if('google'==request_target_name){
//          rank='high';
//          consistency='consistently';
//        }
        console.log("**********************" + request_target_name);
        if(request_target_name == 'pacific drilling')   {
            rank = 'four star'
        }

	    context.request_target = request_target;
        context.rank = rank;
        context.consistency = consistency;
        return resolve(context);
    });
  }, fetchDeliveryInfo({context, entities}){
    if(debug){console.log('fetchDeliveryInfo called');}

    console.log('duration 1: ',entities.duration);
    return new Promise(function(resolve, reject) {
        var duration = firstEntityValue(entities, 'duration');
        console.log('duration 2: ',duration);
        if(!duration){
            context.missingDuration = true;
        }else{
        context.shipment_source = 'China';
        context.shipment_destination = 'Germany';
        context.shipment_duration = '2 weeks';
        context.shipment_delay = '1 week';
        context.shipment_delay_reason = 'bad weather forecast';
        if(context.missingDuration){
           delete context.missingDuration;
        }
      }
        return resolve(context);
    });
  },
  fetchAlternate({context, entities}){
    if(debug){console.log('fetchAlternate called');}
    return new Promise(function(resolve, reject) {
        context.supplier_alt_1 = '<ol><li>Pacific Drilling</li><li>Black International Rigs</li></ol>';
        return resolve(context);
    });
  },
  fetchBudgetInfo({context, entities}){
    if(debug){console.log('fetchBudgetInfo called');}
    return new Promise(function(resolve, reject) {
      console.log(entities);
      var availableBudget = 40000;
      var currency = entities.amount_of_money[0].unit;
      context.availableBudget = currency+''+availableBudget;
      var exceedAmount = (parseInt(firstEntityValue(entities, 'amount_of_money'))-availableBudget);
      if(exceedAmount>0){
        context.fail = true;
        context.exceedAmount = currency+''+exceedAmount;
        context.executeBudgetOptions = true;
      }else{
        context.pass = true;
      }

      return resolve(context);
    });
  },
  fetchBudgetOptions({context, entities}){
    if(debug){console.log('fetchBudgetOptions called');}
    console.log('fetchBudgetOptions entered');
    return new Promise(function(resolve, reject) {
      //removing previously set default options if it exists
      console.log('context: ',context);
      console.log('entities: ',entities);
      if(context.default){
        console.log('default: context: ',context);
        console.log('default: entities: ',entities);
        delete context.default;
      }
      var choice = firstEntityValue(entities, 'number');
      switch(choice){
        case 1:
          console.log('case 1');
          context.alternateAsset1 = 'XYX-2 Trailer mounted oil well drilling rig';
          context.alternateAsset2 = 'XZ-200C Trailer mounted oil well drilling rig';
          context.addComment = 'Sam, could you check if one of these options would work? <br> Otherwise we will have to get additional approvals since we will go over the budget. <ol style="padding-left:6em"><li>'+context.alternateAsset1+'</li><li>'+context.alternateAsset2+'</li></ol>';
          break;
        case 2:
          context.pushToNextQuarter = true;
          context.addComment = 'Sam, can we buy this asset next quarter?';
        console.log('case 2');
          break;
        case 3:
          context.checkWithFinance = true;
          context.addComment = '@finance, Can this request be approved under a different cost center ?, as it exceeds the budget allocated for its designated cost center.';
        console.log('case 3');
          break;
        default:
          context.default=true;
      }
      delete context.executeBudgetOptions;
      console.log('context after switch: ',context);
      return resolve(context);
    });
  }
};

// Setting up our bot
const wit = new Wit({
    accessToken: WIT_TOKEN,
    actions,
    logger: new log.Logger(log.INFO)
});

router.handleMessage = function (socket, data) {
    if(debug){
        console.log('reached handleMessage');
        return;
    }
    const sessionId = findOrCreateSession(socket);
    wit.runActions(sessionId,
        data,
        sessions[sessionId].context).then((context) => {
        if(debug){console.log("Waiting for next messages");}
        sessions[sessionId].context = context;
    });
};

router.debug = debug;

module.exports = router;