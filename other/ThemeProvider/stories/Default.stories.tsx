/*
 * @Author: Zhouqi
 * @Date: 2024-09-13 15:26:20
 * @LastEditors: Zhouqi
 * @LastEditTime: 2024-09-13 20:53:33
 */
import {  Button, ThemeProvider,dark,light } from "jkyun-ui";

export const Default = () => {
  return <div>
    <ThemeProvider theme={light}>
      <div style={{width:100,height:100}}>light</div>
    </ThemeProvider>
    <ThemeProvider theme={dark}>
      <div style={{width:100,height:100}}>
        <Button>dark</Button>
      </div>
    </ThemeProvider>
  </div>
}