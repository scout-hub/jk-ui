/*
 * @Author: Zhouqi
 * @Date: 2024-09-13 10:24:18
 * @LastEditors: Zhouqi
 * @LastEditTime: 2024-09-18 09:46:20
 */
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "jk-ui": path.resolve(__dirname, "./src/index.ts"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  }
})
