// =============================================================================
// import
// =============================================================================

// stories
const goWTF = require('../stories/goWTF');
const listWork = require('../stories/listWork');

// senders
const sendText = require('../senders/sendText');

// =============================================================================
// export
// =============================================================================

module.exports = async function receiveQuickReply(id, payload) {
  // main menu
  if (payload === 'WORK_PAYLOAD') {
    listWork(id);
    return;
  }

  if (payload === 'LAB_PAYLOAD') {
    await sendText(id, 'This is my lab!');
    return;
  }

  if (payload === 'BLOG_PAYLOAD') {
    await sendText(id, 'This is my blog!');
    return;
  }

  if (payload === 'ABOUT_PAYLOAD') {
    await sendText(id, 'This is my about!');
    return;
  }

  goWTF(id, 'choice');
};
