/*
 * @Author: Zhouqi
 * @Date: 2024-09-13 14:15:38
 * @LastEditors: Zhouqi
 * @LastEditTime: 2024-09-18 10:30:05
 */
import React from 'react';
import { ButtonProps } from './button.types';
import { useStyleByProps } from './style';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { type, children, className, disabled, size, ...resetProps } = props;
    const cls = useStyleByProps({ type, className, disabled, size });
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
