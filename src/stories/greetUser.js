// =============================================================================
// import
// =============================================================================

// content
const content = require('../content');

// senders
const sendText = require('../senders/sendText');
const sendQuickReplies = require('../senders/sendQuickReplies');

// helpers
const getFirstName = require('../helpers/getFirstName');

// =============================================================================
// export
// =============================================================================

module.exports = async function greetUser(id) {
  const firstName = await getFirstName(id);
  await sendText(id, `Hey, ${firstName} 👋`);
  await sendText(
    id,
    'This is a Messenger version of the online home of a digital studio 🤘',
  );
  await sendQuickReplies(id, 'What are you interested in?', [
    ...content.mainMenu,
  ]);
};
