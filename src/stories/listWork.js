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

module.exports = async function listWork(id) {
  await sendText(
    id,
    'Smart 👏 This is the collection of case studies and past work.',
  );
  // await sendText(
  //   id,
  //   'If you’re looking for something specific, you can filter for design, development, copywriting, or all work.  Some projects have a full case study, some don’t.',
  // );
  await sendTemplate(id, content.work);
  await sendQuickReplies(id, 'Wanna see more? 😏', [...content.mainMenu]);
};
