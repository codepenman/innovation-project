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

var dependencies = {};

const WIT_TOKEN = 'J6XN5MMXRQXBDAQW7MF4F3ZCZDU2FQY6';//'POSPQ54KA5V6KJNF56VR4UXWVPPKUEFA';
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
  clauseAdded({context, entities}){
    console.log('clauseAdded entered');
      return new Promise(function(resolve, reject)  {
          var clause_number = firstEntityValue(entities, 'clause_number');

      });
  },
  fetchInfo({context, entities}){
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

router.handleMessage = function (socket, message, context) {
    if(debug){
        console.log('reached handleMessage');
        return;
    }
    const sessionId = findOrCreateSession(socket);
    wit.runActions(sessionId,
        message,
        sessions[sessionId].context).then((context) => {
        if(debug){console.log("Waiting for next messages");}
        sessions[sessionId].context = context;
    });
};

router.debug = debug;

module.exports = router;