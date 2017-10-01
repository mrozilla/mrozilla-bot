// =============================================================================
// import
// =============================================================================

// content
const content = require('../content');

// senders
const sendText = require('../senders/sendText');

// =============================================================================
// export
// =============================================================================

module.exports = async function showAbout(id) {
  content.about.map(async (aboutItem) => {
    await sendText(id, aboutItem);
  });
};
