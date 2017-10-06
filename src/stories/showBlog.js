// =============================================================================
// import
// =============================================================================

// content
const content = require('../content');

// senders
const sendText = require('../senders/sendText');
const sendTemplate = require('../senders/sendTemplate');
const sendQuickReplies = require('../senders/sendQuickReplies');

// =============================================================================
// export
// =============================================================================

module.exports = async function showBlog(id) {
  await sendText(id, 'Clever 🤓 I write stuff down every now and then');
  await sendText(id, 'You can see all my articles on Medium 🖋');
  await sendTemplate(id, content.blog);
  await sendQuickReplies(id, 'Wanna see more? 😏', [...content.mainMenu]);
};
