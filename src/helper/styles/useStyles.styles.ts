/*
 * @Author: Zhouqi
 * @Date: 2024-09-13 20:13:59
 * @LastEditors: Zhouqi
 * @LastEditTime: 2024-09-14 10:22:08
 */

import { makeStyles, mergeClasses } from "@griffel/react";
import { useStyleTag } from "./useStyleTag";
import { Theme, tokens } from 'jkyun-ui';

type ThemeContextValue = Theme | Partial<Theme> | undefined;
export type ThemeProviderProps = React.HTMLAttributes<React.ChildContextProvider<ThemeContextValue>> & {
  theme: Theme,
  componentTag: string
};

const {
  colorNeutral,
  colorNeutralBackground,
  boxShadowNeutral,
  borderColorNeutral,
  fontSizeNeutral,
  heightNeutral,
  paddingNeutral,
} = tokens;

const useBaseStyles = makeStyles({
  root: {
    color: colorNeutral,
    backgroundColor: colorNeutralBackground,
    boxShadow: boxShadowNeutral,
    'border-color': borderColorNeutral,
    fontSize: fontSizeNeutral,
    height: heightNeutral,
    padding: paddingNeutral,
  },
});

export const useStyles = ({ theme, componentTag }: Partial<ThemeProviderProps>) => {
  useStyleTag({ theme, componentTag });
  const baseStyle = useBaseStyles();

  const cls = mergeClasses(
    baseStyle.root,
    componentTag,
  );
  return cls;
}