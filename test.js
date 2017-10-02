// =============================================================================
// Loop asynchronously
// =============================================================================

// helpers
const content = ['2', '3', '4'];

function asyncLog(message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log(message)); // eslint-disable-line
    }, Math.floor(Math.random() * 1001));
  });
}

// =============================================================================
// Functions
// =============================================================================

function asyncLoop(array) {
  // doesn't iterate in sequence
  // return content.forEach(async (aboutItem) => {
  //   await asyncLog(aboutItem);
  // });

  // throws in ESlint, requires async scope
  // for (const item of content) {
  //   await asyncLog(item);
  // }

  return array.reduce(
    (promise, item) => promise.then(() => asyncLog(item)),
    Promise.resolve(),
  );
}

(async function fakeMessages() {
  await asyncLog('1');
  // await asyncLoop(content);
  await content.reduce(
    (promise, item) => promise.then(() => asyncLog(item)),
    Promise.resolve(),
  );
  await asyncLog('5');
}());
