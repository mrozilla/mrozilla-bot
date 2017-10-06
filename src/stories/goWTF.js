// =============================================================================
// import
// =============================================================================

// content
const content = require('../content');

// senders
const sendText = require('../senders/sendText');
const sendQuickReplies = require('../senders/sendQuickReplies');

// =============================================================================
// export
// =============================================================================

module.exports = async function goWTF(id, topic = 'message') {
  await sendText(
    id,
    `Whoah, not sure what to do with this ${topic} just yet 😬`,
  );
  await sendQuickReplies(id, 'These common topics might help 🤞', [
    ...content.mainMenu,
  ]);
};
