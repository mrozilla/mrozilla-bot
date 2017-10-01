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
    `Whoah, I'm not sure what to do with this ${topic} just yet 😬`,
  );
  await sendQuickReplies(
    id,
    "Why don't you have a look at some of the common topics?",
    [...content.mainMenu],
  );
};
