/*
 * @Author: Zhouqi
 * @Date: 2024-09-14 10:22:33
 * @LastEditors: Zhouqi
 * @LastEditTime: 2024-09-14 10:26:29
 */
import { describe, test, expect } from 'vitest';
import { createCSSRuleFromTheme } from '../useThemeStyleTag';

describe('createCSSRuleFromTheme', () => {
  test('should return empty string when theme is undefined', () => {
    expect(createCSSRuleFromTheme('.selector', undefined)).toMatchInlineSnapshot(`".selector {}"`);
  });
  test('should return css rule string when theme is not undefined', () => {
    expect(createCSSRuleFromTheme('.selector', { colorNeutral: 'red' })).toMatchInlineSnapshot(`
      ".selector {--colorNeutral: red;}"
    `);
  });
});