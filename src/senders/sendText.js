// =============================================================================
// import
// =============================================================================

const request = require('request-promise-native');

// =============================================================================
// export
// =============================================================================

module.exports = async function sendText(id, message) {
  try {
    const response = await request.post({
      url: 'https://graph.facebook.com/v2.6/me/messages',
      qs:  {
        access_token: process.env.PAGE_ACCESS_TOKEN,
      },
      json: {
        recipient: { id },
        message:   {
          text: message,
        },
      },
    });
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};
