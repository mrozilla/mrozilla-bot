// =============================================================================
// Import
// =============================================================================

const request = require('request-promise-native');

// =============================================================================
// Export
// =============================================================================

module.exports = async function sendQuickReplies(
  id,
  message,
  quickRepliesArray,
) {
  return request.post({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs: {
      access_token: process.env.PAGE_ACCESS_TOKEN,
    },
    json: {
      recipient: { id },
      message: {
        text: message,
        quick_replies: quickRepliesArray.map(quickReply => ({
          content_type: 'text',
          title: quickReply.title,
          payload: quickReply.payload,
        })),
      },
    },
  });
};