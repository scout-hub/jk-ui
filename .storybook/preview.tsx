/*
 * @Author: Zhouqi
 * @Date: 2024-09-13 10:25:56
 * @LastEditors: Zhouqi
 * @LastEditTime: 2024-09-13 14:14:49
 */
import type { Preview } from '@storybook/react';
import {
  Title,
  Description,
  Controls,
  Stories,
  Primary,
} from '@storybook/blocks';
import React from 'react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Controls />
          <Stories includePrimary={false} />
        </>
      ),
    },
  },
  tags: ['autodocs'],
};

export default preview;
