/*
 * @Author: Zhouqi
 * @Date: 2024-09-13 15:25:12
 * @LastEditors: Zhouqi
 * @LastEditTime: 2024-09-14 09:51:52
 */
import type { Meta } from '@storybook/react';
import { ThemeProvider } from 'jkyun-ui';
import { Default } from './Default.stories';
import DefaultSource from './Default.stories.tsx?raw';

const meta: Meta<typeof ThemeProvider> = {
  title: '组件/ThemeProvider',
  component: ThemeProvider,
};

export default meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(Default as any).parameters = {
  docs: {
    source: {
      code: DefaultSource,
    },
  }
}

export { Default };
