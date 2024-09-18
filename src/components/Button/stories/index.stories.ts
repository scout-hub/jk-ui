import type { Meta } from '@storybook/react';
import { Button } from 'jk-ui';
import { Custom } from './Custom.stories';
import CustomSource from './Custom.stories?raw';

const meta: Meta<typeof Button> = {
  title: '组件/Button',
  component: Button,
};

export default meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(Custom as any).parameters = {
  docs: {
    source: {
      code: CustomSource,
    },
  }
}

export { Custom }