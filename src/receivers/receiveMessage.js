// =============================================================================
// import
// =============================================================================

// stories
const goWTF = require('../stories/goWTF');

// receivers
const receiveQuickReply = require('../receivers/receiveQuickReply');

// =============================================================================
// component
// =============================================================================

module.exports = async function receiveMessage({ message, sender }) {
  if (!message.is_echo) {
    console.log(`Received message from sender.id: ${sender.id}`);
    console.log(`Message is: ${JSON.stringify(message)}`);

    if (message.quick_reply) {
      receiveQuickReply(sender.id, message.quick_reploy.payload);
      return;
    }

    if (message.text) {
      goWTF(sender.id, 'text');
      return;
    }

    if (message.attachments) {
      goWTF(sender.id, 'attachment');
      return;
    }

    goWTF(sender.id);
  }
};
