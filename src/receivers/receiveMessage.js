// =============================================================================
// import
// =============================================================================

// components
const sendText = require('../senders/sendText');

// =============================================================================
// component
// =============================================================================

module.exports = async function handleMessage({ message, event }) {
  if (!event.message.is_echo) {
    console.log(`Received message from sender.id: ${event.sender.id}`);
    console.log(`Message is: ${JSON.stringify(message)}`);

    if (message.text) {
      await sendText(event.sender.id, `"Your text was: ${message.text}"`);
    } else if (message.attachments) {
      await sendText(
        event.sender.id,
        "Sorry, I can't deal with attachments just yet 🤷‍♂️",
      );
    }
  }
};
