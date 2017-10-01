// =============================================================================
// Listen to events
// =============================================================================

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', text => processMessage(text));

// =============================================================================
// Process message
// =============================================================================

async function processMessage(text) {
  console.log(text.trim() === 'hello');
  if (text.trim() === 'hello') {
    await sendMessage('Hello!');
  } else {
    await sendMessage("Didn't get that :/");
  }
}

// =============================================================================
// Welcome
// =============================================================================

function done() {
  console.log('Bye!');
  process.exit();
}

// =============================================================================
// Send message
// =============================================================================

function sendMessage(message) {
  // fake async
  return new Promise(resolve => {
    resolve(console.log(message));
  });
}
