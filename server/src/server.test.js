/**
 * The test below is a sample Jest test to get you started.
 */
test('a simple starter test', async (done) => {
  const finished = [];
  const testFun = (x1, x2) => {
    finished.push(x1 + x2);
  };

  await testFun(1, 2);
  await testFun(2, 3);
  await testFun(3, 4);

  expect(finished).toEqual([3, 5, 7]);
  done();
});
