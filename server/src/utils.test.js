#!/usr/bin/env node

const { throttle } = require('./utils');

test('test throttle', async (done) => {
  const finished = [];
  const testFun = (x1, x2) => { finished.push(x1 + x2); };
  const testFunThrottled = throttle(testFun);

  await testFunThrottled(1, 2);
  await testFunThrottled(2, 3);
  await testFunThrottled(3, 4);

  expect(finished).toEqual([3, 5, 7]);
  done();
});

