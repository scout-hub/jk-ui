/*
 * @Author: Zhouqi
 * @Date: 2024-09-13 14:15:38
 * @LastEditors: Zhouqi
 * @LastEditTime: 2024-09-18 10:30:05
 */
import React, { useContext, useMemo } from 'react';
import { ButtonProps } from './button.types';
import { useStyleByProps } from './style';
import { GroupButtonContext } from './context';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { type, children, className, disabled, size, ...resetProps } = props;
    const groupButtonContextValue = useContext(GroupButtonContext);
    // 属性应用规则：按钮自身的 size > ButtonGroup 提供的 size
    const realSize = useMemo(
      () => size ?? groupButtonContextValue?.size ?? 'middle',
      [size, groupButtonContextValue?.size]
    );
    // 属性应用规则：按钮自身的 type > ButtonGroup 提供的 type
    const realType = useMemo(
      () => type ?? groupButtonContextValue?.type ?? 'default',
      [type, groupButtonContextValue?.type]
    );
    const cls = useStyleByProps({
      type: realType,
      className,
      disabled,
      size: realSize,
    });
    return (
      <button
        {...resetProps}
        ref={ref}
        type="button"
        className={cls}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
);
