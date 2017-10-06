// =============================================================================
// import
// =============================================================================

// stories
const greetUser = require('../stories/greetUser');
const goWTF = require('../stories/goWTF');

// =============================================================================
// component
// =============================================================================

module.exports = async function handlePostback({
  sender,
  postback: { payload },
}) {
  if (payload === 'GET_STARTED_PAYLOAD') {
    greetUser(sender.id);
  } else {
    goWTF(sender.id);
  }
};
