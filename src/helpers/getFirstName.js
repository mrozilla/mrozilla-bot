// =============================================================================
// import
// =============================================================================

const request = require('request-promise-native');

// =============================================================================
// export
// =============================================================================

module.exports = async function getFirstName(id) {
  const body = await request({
    url: `https://graph.facebook.com/v2.6/${id}`,
    qs: {
      access_token: process.env.PAGE_ACCESS_TOKEN,
      fields: 'first_name',
    },
  });
  return JSON.parse(body).first_name;
};
