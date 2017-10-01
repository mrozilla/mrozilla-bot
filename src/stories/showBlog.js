// =============================================================================
// import
// =============================================================================

// content
const content = require('../content');

// senders
const sendText = require('../senders/sendText');
const sendTemplate = require('../senders/sendTemplate');

// =============================================================================
// export
// =============================================================================

module.exports = async function listWork(id) {
  await sendText(id, 'I write stuff down every now and then 🖋');
  await sendText(id, 'You can see all my articles on Medium');
  await sendTemplate(id, content.blog);
};
