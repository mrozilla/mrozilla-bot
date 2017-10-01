// =============================================================================
// import
// =============================================================================

const request = require('request-promise-native');

// =============================================================================
// export
// =============================================================================

module.exports = async function sendTemplate(
  id,
  templateArray,
  templateType = 'generic',
  // messengerExtensions = 'false',
  webViewHeightRatio = 'tall',
) {
  return request.post({
    url: 'https://graph.facebook.com/v2.6/me/messages',
    qs:  {
      access_token: process.env.PAGE_ACCESS_TOKEN,
    },
    json: {
      recipient: { id },
      message:   {
        attachment: {
          type:    'template',
          payload: {
            template_type: templateType,
            elements:      templateArray.map(templateItem => ({
              title:          templateItem.title,
              image_url:      templateItem.image,
              subtitle:       templateItem.tagline,
              default_action: {
                type: 'web_url',
                url:
                  templateItem.url.substr(1) === '/'
                    ? `https://mrozilla.cz${templateItem.url}`
                    : templateItem.url,
                webview_height_ratio: webViewHeightRatio,
                // messenger_extensions: messengerExtensions,
                // fallback_url:         templateItem.url, // TODO is this smart?
              },
              // buttons: [
              //   {
              //     type:  'web_url',
              //     url:   'https://mrozilla.cz/work',
              //     title: 'View website',
              //   },
              //   {
              //     type:    'postback',
              //     title:   'Go back',
              //     payload: 'BACK_WORK_PAYLOAD',
              //   },
              // ], // TODO add multiple buttons?
            })),
          },
        },
      },
    },
  });
};
