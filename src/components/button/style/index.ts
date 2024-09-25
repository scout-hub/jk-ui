import { Theme, ThemeProviderProps, useStyles } from "jkyun-ui";
import { ButtonProps, ButtonTypes } from "../button.types";
import { mergeClasses } from "@griffel/react";
import {
  Primary,
  Default,
  Danger,
  Success,
  Info,
  Warning,
  useBaseButtonStyle,
  getDisabledButtonStyle,
  getNormalButtonStyle,
  DisabledDefault,
  DisabledPrimary,
  DisabledDanger,
  DisabledInfo,
  DisabledSuccess,
  DisabledWarning,
  SizeTheme
} from "./token";

const themeFromTypeMap: Record<ButtonTypes, Theme> = {
  default: Default,
  primary: Primary,
  danger: Danger,
  success: Success,
  info: Info,
  warning: Warning
}

const disabledThemeFromTypeMap: Record<ButtonTypes, Theme> = {
  default: DisabledDefault,
  primary: DisabledPrimary,
  danger: DisabledDanger,
  success: DisabledSuccess,
  info: DisabledInfo,
  warning: DisabledWarning
};

const getNormalCls = (type: ButtonTypes) => {
  const normalButtonStyle = getNormalButtonStyle();
  return mergeClasses(normalButtonStyle[type]);
};

const getButtonThemeFromProps = ({ type, disabled, size }: Partial<ThemeProviderProps & ButtonProps>) => {
  const typeTheme = disabled ? disabledThemeFromTypeMap[type!] : themeFromTypeMap[type!];
  const sizeTheme = SizeTheme[size!];
  return { ...typeTheme, ...sizeTheme };
}
const getButtonHoverCls = ({ type, disabled }: Partial<ThemeProviderProps & ButtonProps>) => disabled ? getDisabledButtonStyle().root : getNormalCls(type!);

// 根据 props 计算样式
export const useStyleByProps = (props: Partial<ThemeProviderProps & ButtonProps>) => {
  const { type, className, disabled, size } = props;
  const baseButtonStyle = useBaseButtonStyle();
  const buttonTheme = getButtonThemeFromProps({ type, disabled, size });
  const buttonHoverCls = getButtonHoverCls({ type, disabled });
  const themeCls = useStyles({ theme: buttonTheme, componentTag: `jk-button--${type}--${size}${disabled ? '--disabled' : ''}` });

  return mergeClasses(
    'jk-button',
    baseButtonStyle.root,
    themeCls,
    buttonHoverCls,
    className
  );
}

export * from './token';