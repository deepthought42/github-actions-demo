import { describe, expect, it } from '@jest/globals';
import { greet, isEmpty } from './index';

describe('greet', () => {
  it('should return a greeting with the provided name', () => {
    expect(greet('World')).toBe('Hello, World!');
  });

  it('should handle empty name', () => {
    expect(greet('')).toBe('Hello, !');
  });
});

describe('isEmpty', () => {
  it('should return true for empty string', () => {
    expect(isEmpty('')).toBe(true);
    expect(isEmpty('   ')).toBe(true);
  });

  it('should return false for non-empty string', () => {
    expect(isEmpty('hello')).toBe(false);
    expect(isEmpty('  hello  ')).toBe(false);
  });
}); 