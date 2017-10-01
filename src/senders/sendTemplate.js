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
  globalButton,
  templateType = 'generic',
  messengerExtensions = false,
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
              subtitle:       templateItem.subtitle,
              default_action: {
                type:                 'web_url',
                url:                  templateItem.url,
                messenger_extensions: messengerExtensions,
                webview_height_ratio: webViewHeightRatio,
                fallback_url:         templateItem.url, // TODO is this smart?
              },
            })),
            buttons: [
              {
                type:  'web_url',
                url:   globalButton.url,
                title: globalButton.text, // TODO add multiple buttons?
              },
            ],
          },
        },
      },
    },
  });
};
