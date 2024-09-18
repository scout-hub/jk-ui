/*
 * @Author: Zhouqi
 * @Date: 2024-09-13 20:17:37
 * @LastEditors: Zhouqi
 * @LastEditTime: 2024-09-14 10:22:17
 */
import { useId, useLayoutEffect, useRef, } from "react";
import { ThemeProviderProps } from "./ThemeProvider";
import { Theme } from 'jk-ui';

// 根据 theme 创建 css 规则
export const createCSSRuleFromTheme = (selector: string, theme?: Partial<Theme>) => {
  if (theme) {
    const cssRuleString = (
      Object.keys(theme) as (keyof typeof theme)[]
    ).map((key) => `--${key}: ${theme[key]};`).join('\n');
    return `${selector} {${cssRuleString}}`;
  }
  return `${selector} {}`;
};

// 创建 style 标签
const createStyleTag = (id: string) => {
  if (!document) return null;
  const styleTag = document.createElement('style');
  styleTag.id = id;
  document.head.appendChild(styleTag);
  return styleTag;
}

// 往style 标签中插入样式
const insertSheet = (styleTag: HTMLStyleElement, rule: string) => {
  const sheet = styleTag?.sheet;
  if (sheet) {
    if (sheet.cssRules?.length) {
      sheet.deleteRule(0);
    }
    sheet.insertRule(rule, 0);
  }
}

export const useThemeStyleTag = ({ theme }: Partial<ThemeProviderProps>) => {
  const themeId = useId();
  const escapedId = themeId.replace(/:/g, "");
  const themeClassName = `jk-ui-theme${escapedId}`;
  const rule = createCSSRuleFromTheme(`.${themeClassName}`, theme);
  const styleTag = useRef<HTMLStyleElement | undefined | null>(null);

  useLayoutEffect(() => {
    styleTag.current = createStyleTag(themeClassName);
    // tag 存在时插入样式
    if (styleTag.current) {
      insertSheet(styleTag.current, rule);
    }
    return () => {
      styleTag.current?.remove();
    }
  }, [themeClassName, rule]);

  return {
    themeClassName,
  };
}