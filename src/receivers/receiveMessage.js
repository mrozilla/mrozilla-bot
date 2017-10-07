// =============================================================================
// import
// =============================================================================

// stories
const goWTF = require('../stories/goWTF');

// receivers
const receiveQuickReply = require('../receivers/receiveQuickReply');
const receiveText = require('../receivers/receiveText');

// senders
const sendAction = require('../senders/sendAction');

// =============================================================================
// component
// =============================================================================

module.exports = async function receiveMessage({ message, sender }) {
  if (!message.is_echo) {
    console.log(`Received message from sender.id: ${sender.id}`); // eslint-disable-line
    console.log(`Message is: ${JSON.stringify(message)}`); // eslint-disable-line

    if (message.quick_reply) {
      await sendAction(sender.id, 'mark_seen');
      await sendAction(sender.id, 'typing_on');
      await receiveQuickReply(sender.id, message.quick_reply.payload);
      return;
    }

    if (message.text) {
      await sendAction(sender.id, 'mark_seen');
      await sendAction(sender.id, 'typing_on');
      await receiveText(sender.id, message.text);
      return;
    }

    if (message.attachments) {
      goWTF(sender.id, 'attachment');
      return;
    }

    goWTF(sender.id);
  }
};
