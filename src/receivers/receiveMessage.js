// =============================================================================
// import
// =============================================================================

// components
const goWTF = require('../stories/goWTF');
const sendText = require('../senders/sendText');

// =============================================================================
// component
// =============================================================================

module.exports = async function receiveMessage({ message, sender }) {
  if (!message.is_echo) {
    console.log(`Received message from sender.id: ${sender.id}`);
    console.log(`Message is: ${JSON.stringify(message)}`);

    if (message.text) {
      goWTF(sender.id);
      return;
    }

    if (message.attachments) {
      goWTF(sender.id);
      return;
    }

    if (message.quick_reply) {
      if (message.quick_reply.payload) {
        if (message.quick_reply.payload === 'WORK_PAYLOAD') {
          await sendText(sender.id, 'This is my work!');
          return;
        }

        if (message.quick_reply.payload === 'LAB_PAYLOAD') {
          await sendText(sender.id, 'This is my lab!');
          return;
        }

        if (message.quick_reply.payload === 'BLOG_PAYLOAD') {
          await sendText(sender.id, 'This is my blog!');
          return;
        }

        if (message.quick_reply.payload === 'ABOUT_PAYLOAD') {
          await sendText(sender.id, 'This is my about!');
          return;
        }
      }
    }

    goWTF(sender.id);
  }
};
