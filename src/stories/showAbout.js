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
    'Here we go 🙌 These are the details, historical data, and some other information.',
  );
  await content.about.reduce(
    (promise, item) => promise.then(() => sendText(id, item)),
    Promise.resolve(),
  );
  await sendQuickReplies(id, 'Wanna see more? 😏', [...content.mainMenu]);
};
