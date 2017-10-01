// =============================================================================
// import
// =============================================================================

// senders
const sendText = require('../senders/sendText');
const sendQuickReplies = require('../senders/sendQuickReplies');

// =============================================================================
// export
// =============================================================================

module.exports = async function goWTF(id) {
  await sendText(
    id,
    "Whoah, I'm not sure what to do with this message just yet 🤔",
  );
  await sendQuickReplies(
    id,
    "Why don't you have a look at the basic options?",
    [
      { title: 'Work', payload: 'WORK_PAYLOAD' },
      { title: 'Lab', payload: 'LAB_PAYLOAD' },
      { title: 'Blog', payload: 'BLOG_PAYLOAD' },
      { title: 'About', payload: 'ABOUT_PAYLOAD' },
    ],
  );
};
