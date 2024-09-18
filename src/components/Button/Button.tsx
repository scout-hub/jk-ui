/*
 * @Author: Zhouqi
 * @Date: 2024-09-13 14:15:38
 * @LastEditors: Zhouqi
 * @LastEditTime: 2024-09-18 10:30:05
 */
import  { HTMLAttributes } from "react";

type ButtonProps = HTMLAttributes<HTMLButtonElement>;

export const Button = ({children}:ButtonProps) => {
  return <button>{children}</button>;
}