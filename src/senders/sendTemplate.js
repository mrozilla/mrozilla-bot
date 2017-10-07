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
  webViewHeightRatio = 'tall',
  // messengerExtensions = 'false',
) {
  try {
    const response = await request.post({
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
                    templateItem.link.charAt(0) === '/'
                      ? `https://mrozilla.cz${templateItem.link}`
                      : templateItem.link,
                  webview_height_ratio: webViewHeightRatio,
                  // messenger_extensions: messengerExtensions,
                  // fallback_url:         templateItem.url,
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
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};
