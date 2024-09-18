
/*
 * @Author: Zhouqi
 * @Date: 2024-09-13 15:24:24
 * @LastEditors: Zhouqi
 * @LastEditTime: 2024-09-14 10:00:16
 */
import React from 'react';
import {Theme} from 'jk-ui';
import { useStyles } from './useStyles.styles';

type ThemeContextValue = Theme | Partial<Theme> | undefined;

export type ThemeProviderProps = React.HTMLAttributes<React.ChildContextProvider<ThemeContextValue>> & {
  theme:Theme
}

export const ThemeContext = React.createContext<ThemeContextValue>(undefined);

export const ThemeProvider = ({theme,className,children,...resetProps}:ThemeProviderProps) => {
  const cls = useStyles({theme,className});
  return <ThemeContext.Provider value={theme} {...resetProps}>
    <div className={cls}>{children}</div>
    </ThemeContext.Provider>
}