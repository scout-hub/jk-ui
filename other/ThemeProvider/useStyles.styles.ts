/*
 * @Author: Zhouqi
 * @Date: 2024-09-13 20:13:59
 * @LastEditors: Zhouqi
 * @LastEditTime: 2024-09-14 10:22:08
 */

import { makeStyles, mergeClasses } from "@griffel/react";
import { useThemeStyleTag } from "./useThemeStyleTag";
import { ThemeProviderProps } from "./ThemeProvider";
import { tokens } from "jkyun-ui";

const JkProviderClassNames = {
  root: "jkyun-ui-ThemeProvider",
};

const useBaseStyles = makeStyles({
  root: {
    color: tokens.colorNeutral,
    backgroundColor: tokens.colorNeutralBackground,
  },
});

export const useStyles = ({ theme, className }: Partial<ThemeProviderProps>) => {
  const { themeClassName } = useThemeStyleTag({ theme });
  const baseStyle = useBaseStyles();

  const cls = mergeClasses(
    themeClassName,
    JkProviderClassNames.root,
    baseStyle.root,
    className,
  );
  return cls;
}