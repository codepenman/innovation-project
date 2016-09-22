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
    // console.log(socket);
    // Let's see if we already have a session for the user user_id
    Object.keys(sessions).forEach(k => {
        if (sessions[k].id === socket.id) {
            // Yep, got it!
            console.log("Session found");
            sessionId = k;
            //sessions[sessionId].socket = socket.socket; // Update socket
        }
    });
    if (!sessionId) {
        console.log("Session not found");
        // No session found for user user_id, let's create a new one
        sessionId = new Date().toISOString();
        sessions[sessionId] = {id: socket.id, socket: socket.socket, context: {}};
    }
    return sessionId;
};

const actions = {
  send(request, response) {
      console.log("Send method called");
    const {sessionId, context, entities} = request;
    const {text, quickreplies} = response;
    let dataToSend = {};
    dataToSend.text=text;
    if(context.addClause){
      console.log('adding clause: '+context.addClause);
      dataToSend.addClause=context.addClause;
      delete context.addClause;
    }
      console.log("Sending data back to client through socket");
      // console.log(sessionId);
      //console.log(sessions[sessionId].socket);
    sessions[sessionId].socket.emit('chatReceived',dataToSend);
    return new Promise(function(resolve, reject) {
      return resolve();
    });
  },
  clauseAdded({context, entities}){
    console.log('clauseAdded entered');
      return new Promise(function(resolve, reject)  {
          var clause_number = firstEntityValue(entities, 'clause_number');
          console.log(context);
          console.log(entities);
          console.log(clause_number);

          var clauses = context.model;
          if(clauses['A1'] == undefined || clauses['A1'] == null)   {
              console.log("Validation Failed..");
              context.validationFailed = true;
          }else {
              reject();
          }
          resolve(context);
      });
  },
  fixContract({context, entities}){
      console.log("Inside Fix Contract");
      return new Promise(function(resolve, reject)  {
          context.addClause = "A2";
          resolve(context);
      });
  }
};

// Setting up our bot
const wit = new Wit({
    accessToken: WIT_TOKEN,
    actions,
    logger: new log.Logger(log.INFO)
});

router.findOrCreateSession = function(socketId, socket)    {
    findOrCreateSession({"id": socketId, "socket": socket});
};

router.handleMessage = function (socketId, socket, message) {
    if(debug){
        console.log('reached handleMessage');
    }
    const sessionId = findOrCreateSession({"id": socketId, "socket": socket});
    wit.runActions(sessionId,
        message,
        sessions[sessionId].context).then((context) => {
        if(debug){console.log("Waiting for next messages");}
        sessions[sessionId].context = context;
    });
};

router.initiateInteraction = function (socketId, message, model)    {
    console.log("Initiating session");
    //Session is already created, I made this call to find Session, if session is not found
    //then there is some serius bug...
    const sessionId = findOrCreateSession({"id": socketId, "socket": null});
    sessions[sessionId].context = {
        model : model
    };
    wit.runActions(sessionId,
        message,
        sessions[sessionId].context).then((context) => {
        if(debug){console.log("Waiting for next messages");}
        sessions[sessionId].context = context;
    });
};

router.debug = debug;

module.exports = router;