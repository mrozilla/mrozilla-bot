// =============================================================================
// import
// =============================================================================

// content
const content = require('../content');

// senders
const sendText = require('../senders/sendText');
const sendQuickReplies = require('../senders/sendQuickReplies');

// helpers
const getUserProfile = require('../helpers/getUserProfile');

// =============================================================================
// export
// =============================================================================

module.exports = async function greetUser(id) {
  const userProfile = await getUserProfile(id);
  await sendText(id, `Hey, ${userProfile.first_name} 👋`);
  await sendText(
    id,
    'This is a Messenger version of my website—the online home of a one-man digital studio 🤘',
  );
  await sendQuickReplies(id, 'What are you interested in?', [
    ...content.mainMenu,
  ]);
};
