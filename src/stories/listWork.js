// =============================================================================
// import
// =============================================================================

// content
const content = require('../content');

// senders
const sendTemplate = require('../senders/sendTemplate');

// =============================================================================
// export
// =============================================================================

module.exports = async function listWork(id) {
  await sendTemplate(id, content.work);
};
