// =============================================================================
// import
// =============================================================================

// stories
const goWTF = require('../stories/goWTF');
const listWork = require('../stories/listWork');
const listLab = require('../stories/listLab');
const showBlog = require('../stories/showBlog');

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
    listLab(id);
    return;
  }

  if (payload === 'BLOG_PAYLOAD') {
    showBlog(id);
    return;
  }

  if (payload === 'ABOUT_PAYLOAD') {
    await sendText(id, 'This is my about!');
    return;
  }

  // TODO add filtering

  goWTF(id, 'choice');
};
