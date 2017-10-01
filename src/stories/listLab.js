// =============================================================================
// import
// =============================================================================

// content
const content = require('../content');

// senders
const sendText = require('../senders/sendText');
const sendTemplate = require('../senders/sendTemplate');

// =============================================================================
// export
// =============================================================================

module.exports = async function listLab(id) {
  await sendText(
    id,
    'Cheeky 😈 This is the random selection of silly, silly experiments',
  );
  await sendText(
    id,
    'Proof-of-concepts, little tools, silly fooling around. Pushing the limits of the canvas (figuratively & literally).',
  );
  await sendTemplate(id, content.lab);
};
