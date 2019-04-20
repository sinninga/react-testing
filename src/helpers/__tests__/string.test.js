import { capitalize } from '../string';

test('capitalize should handle null', () => {
  expect(capitalize(null)).toBe(null);
});
