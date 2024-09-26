/*
 * @Author: Zhouqi
 * @Date: 2024-09-13 20:17:37
 * @LastEditors: Zhouqi
 * @LastEditTime: 2024-09-14 10:22:17
 */
import { useLayoutEffect, useMemo, useRef, } from "react";
import { Theme } from 'jkyun-ui';

const existComponentTags = new Map();

type ThemeContextValue = Theme | Partial<Theme> | undefined;

export type ThemeProviderProps = React.HTMLAttributes<React.ChildContextProvider<ThemeContextValue>> & {
  theme: Theme,
  componentTag?: string
}

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

export const useStyleTag = ({ theme, componentTag }: Partial<ThemeProviderProps>) => {
  const rule = useMemo(() => createCSSRuleFromTheme(`.${componentTag}`, theme), [theme, componentTag]);
  const styleTag = useRef<HTMLStyleElement | undefined | null>(null);

  useLayoutEffect(() => {
    if (!document) return;
    const occurrence = existComponentTags.get(componentTag);
    existComponentTags.set(componentTag, occurrence ? occurrence + 1 : 1);
    // 已经存在的 componentTag 不再创建
    if (occurrence >= 1) return;
    styleTag.current = createStyleTag(componentTag!);
    insertSheet(styleTag.current, rule);
    return () => {
      if (existComponentTags.get(componentTag) > 1) return;
      styleTag.current?.remove();
      existComponentTags.delete(componentTag);
    }
  }, [componentTag, rule]);
}