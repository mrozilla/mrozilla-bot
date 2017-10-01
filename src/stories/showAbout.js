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

module.exports = async function showAbout(id) {
  await sendText(
    id,
    'These are the details, historical data, and some other information.',
  );
  content.about.forEach(async (aboutItem) => {
    await sendText(id, aboutItem); // TODO figure out async looping
  });
  await sendQuickReplies(id, 'Wanna see more?', [...content.mainMenu]);
};
