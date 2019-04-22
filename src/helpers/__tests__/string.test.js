import { capitalize } from '../string';

test('capitalize should handle null', () => {
  expect(capitalize(null)).toBe(null);
});

test('capitalize should handle empty string', () => {
  expect(capitalize("")).toBe("");
});

test('capitalize should handle one letter string a', () => {
  expect(capitalize("a")).toBe("A");
});

test('capitalize should handle one letter string A', () => {
  expect(capitalize("A")).toBe("A");
});

test('capitalize should handle work for boris', () => {
  expect(capitalize("boris")).toBe("Boris");
});
