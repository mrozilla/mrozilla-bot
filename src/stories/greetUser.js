// =============================================================================
// import
// =============================================================================

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
  await sendText(id, `Hey, ${firstName}!`);
  await sendText(
    id,
    'This is a Messenger version of the online home of a digital studio.',
  );
  await sendQuickReplies(id, 'What are you interested in?', [
    { title: 'Work', payload: 'WORK_PAYLOAD' },
    { title: 'Lab', payload: 'LAB_PAYLOAD' },
    { title: 'Blog', payload: 'BLOG_PAYLOAD' },
    { title: 'About', payload: 'ABOUT_PAYLOAD' },
  ]);
};
