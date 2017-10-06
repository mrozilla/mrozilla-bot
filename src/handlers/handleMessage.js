// =============================================================================
// import
// =============================================================================

// components
const sendText = require('../senders/sendText');

// =============================================================================
// component
// =============================================================================

module.exports = async function handleMessage(event) {
  if (!event.message.is_echo) {
    const { message } = event;
    const { id } = event.sender;

    console.log(`Received message from sender.id: ${id}`);
    console.log(`Message is: ${JSON.stringify(message)}`);

    if (message.text) {
      await sendText(id, {
        text: `"Your text was: ${message.text}"`,
      });
    } else if (message.attachments) {
      await sendText(id, {
        text: "Sorry, I can't deal with attachments just yet 🤷‍♂️",
      });
    }
  }
};
