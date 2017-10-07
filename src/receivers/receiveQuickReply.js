// =============================================================================
// import
// =============================================================================

// stories
const goWTF = require('../stories/goWTF');
const listWork = require('../stories/listWork');
const listLab = require('../stories/listLab');
const showBlog = require('../stories/showBlog');
const showAbout = require('../stories/showAbout');

// =============================================================================
// export
// =============================================================================

module.exports = function receiveQuickReply(id, payload) {
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
    showAbout(id);
    return;
  }

  // TODO add filtering

  goWTF(id, 'choice');
};
