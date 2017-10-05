// =============================================================================
// import
// =============================================================================

// stories
const goWTF = require('../stories/goWTF');

// receivers
const receiveQuickReply = require('../receivers/receiveQuickReply');
const receiveText = require('../receivers/receiveText');

// =============================================================================
// component
// =============================================================================

module.exports = async function receiveMessage({ message, sender }) {
  if (!message.is_echo) {
    console.log(`Received message from sender.id: ${sender.id}`); // eslint-disable-line
    console.log(`Message is: ${JSON.stringify(message)}`); // eslint-disable-line

    if (message.quick_reply) {
      receiveQuickReply(sender.id, message.quick_reply.payload);
      return;
    }

    if (message.text) {
      receiveText(sender.id, message.text);
      return;
    }

    if (message.attachments) {
      goWTF(sender.id, 'attachment');
      return;
    }

    goWTF(sender.id);
  }
};
