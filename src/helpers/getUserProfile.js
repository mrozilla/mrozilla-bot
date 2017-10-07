// =============================================================================
// import
// =============================================================================

const request = require('request-promise-native');

// =============================================================================
// export
// =============================================================================

module.exports = async function getUserProfile(id) {
  try {
    const response = await request.get({
      url: `https://graph.facebook.com/v2.6/${id}`,
      qs:  {
        access_token: process.env.PAGE_ACCESS_TOKEN,
        fields:       'first_name,last_name,profile_pic,locale,timezone,gender',
      },
      json: true,
    });
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error);
  }
};
