// =============================================================================
// import
// =============================================================================

// stories
const greetUser = require('../stories/greetUser');
const goWTF = require('../stories/goWTF');

// senders
const sendAction = require('../senders/sendAction');

// =============================================================================
// component
// =============================================================================

module.exports = async function handlePostback({
  sender,
  postback: { payload },
}) {
  if (payload === 'GET_STARTED_PAYLOAD') {
    await sendAction(sender.id, 'typing_on');
    await greetUser(sender.id);
    return;
  }

  goWTF(sender.id);
};
