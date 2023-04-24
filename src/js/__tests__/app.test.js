import healthIndicator from '../app';

test('above 50', () => {
  const checker = healthIndicator({ name: 'Маг', health: 90 });
  const expected = 'healthy';

  expect(checker).toBe(expected);
});

test('on 50', () => {
  const checker = healthIndicator({ name: 'Маг', health: 50 });
  const expected = 'wounded';

  expect(checker).toBe(expected);
});

// test('on 25', () => {
//   const checker = healthIndicator({ name: 'Маг', health: 25 });
//   const expected = 'wounded';

//   expect(checker).toBe(expected);
// });

test('on 15', () => {
  const checker = healthIndicator({ name: 'Маг', health: 15 });
  const expected = 'wounded';

  expect(checker).toBe(expected);
});

test('on 1', () => {
  const checker = healthIndicator({ name: 'Маг', health: 2 });
  const expected = 'critical';

  expect(checker).toBe(expected);
});
