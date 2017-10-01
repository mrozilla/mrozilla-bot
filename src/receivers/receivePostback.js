// =============================================================================
// import
// =============================================================================

// components
const sendText = require('../senders/sendText');
const sendQuickReplies = require('../senders/sendQuickReplies');
const getFirstName = require('../helpers/getFirstName');

// =============================================================================
// component
// =============================================================================

module.exports = async function handlePostback({
  sender,
  postback: { payload },
}) {
  if (payload === 'GET_STARTED_PAYLOAD') {
    const firstName = await getFirstName(sender.id);
    await sendText(sender.id, {
      text: `Hey, ${firstName}!`,
    });
    await sendText(sender.id, {
      text:
        'This is a Messenger version of the online home of a digital studio.',
    });
    await sendQuickReplies(sender.id, 'What are you interested in?', [
      { title: 'Work', payload: 'WORK_PAYLOAD' },
      { title: 'Lab', payload: 'LAB_PAYLOAD' },
      { title: 'Blog', payload: 'BLOG_PAYLOAD' },
      { title: 'About', payload: 'ABOUT_PAYLOAD' },
    ]);
  }
};
