// =============================================================================
// import
// =============================================================================

// components
const sendText = require('../senders/sendText');

// stories
const greetUser = require('../stories/greetUser');

// =============================================================================
// component
// =============================================================================

module.exports = async function handlePostback({
  sender,
  postback: { payload },
}) {
  if (payload === 'GET_STARTED_PAYLOAD') {
    greetUser(sender.id);
  }
  if (payload === 'WORK_PAYLOAD') {
    await sendText(sender.id, 'This is my work!');
  }
  if (payload === 'LAB_PAYLOAD') {
    await sendText(sender.id, 'This is my lab!');
  }
  if (payload === 'BLOG_PAYLOAD') {
    await sendText(sender.id, 'This is my blog!');
  }
  if (payload === 'ABOUT_PAYLOAD') {
    await sendText(sender.id, 'This is my about!');
  }
};
