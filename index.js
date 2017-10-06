// =============================================================================
// import
// =============================================================================

// express
const express = require('express');
const bodyParser = require('body-parser');

// messenger
const receivePostback = require('./src/receivers/receivePostback');
const receiveMessage = require('./src/receivers/receiveMessage');

// =============================================================================
// server setup
// =============================================================================

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(process.env.PORT || 5000);

// =============================================================================
// routes
// =============================================================================

// root
app.get('/', (req, res) => {
  res.send('Deployed!');
});

// validate FB token
app.get('/webhook', (req, res) => {
  if (
    req.query['hub.mode'] === 'subscribe' &&
    req.query['hub.verify_token'] === process.env.VERIFICATION_TOKEN
  ) {
    console.log('Verified token');
    res.status(200).send(req.query['hub.challenge']);
  } else {
    console.log("ERROR: Tokens don't match");
    res.sendStatus(403);
  }
});

// listen to FB webhook
app.post('/webhook', (req, res) => {
  if (req.body.object === 'page') {
    req.body.entry.forEach((entry) => {
      entry.messaging.forEach((event) => {
        if (event.postback) {
          receivePostback(event);
        } else if (event.message) {
          receiveMessage(event);
        }
      });
    });

    res.sendStatus(200);
  }
});
