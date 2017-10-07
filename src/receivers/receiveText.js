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

module.exports = function receiveQuickReply(id, text) {
  // main menu
  if (text.toLowerCase().includes('work')) {
    listWork(id);
    return;
  }

  if (text.toLowerCase().includes('lab')) {
    listLab(id);
    return;
  }

  if (text.toLowerCase().includes('blog')) {
    showBlog(id);
    return;
  }

  if (text.toLowerCase().includes('about')) {
    showAbout(id);
    return;
  }

  // TODO add filtering

  goWTF(id, 'text');
};
