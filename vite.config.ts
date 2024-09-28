/*
 * @Author: Zhouqi
 * @Date: 2024-09-13 10:24:18
 * @LastEditors: Zhouqi
 * @LastEditTime: 2024-09-18 15:03:31
 */
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dts from "vite-plugin-dts";

const resolve = (str: string) => path.resolve(__dirname, str)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts(),
  ],
  build: {
    outDir: "dist",
    lib: {
      entry: resolve("src/index.ts"),
      name: "jkyun-ui",
      fileName: (format) => `jkyun-ui.${format}.js`,
      formats: ["cjs", "es", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        format: "cjs",
      },
    },
  },
  resolve: {
    alias: {
      "jkyun-ui": path.resolve(__dirname, "./src/index.ts"),
      '@': path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  }
})
