/*
 * @Author: Zhouqi
 * @Date: 2024-09-13 14:22:44
 * @LastEditors: Zhouqi
 * @LastEditTime: 2024-09-19 20:45:08
 */
import type { Meta, StoryFn } from '@storybook/react';
import { Button } from 'jkyun-ui';
import { TypeGroupButton } from './type.stories';
import TypeButtonGroupCode from './type.stories?raw';
import { SizeGroupButton } from './size.stories';
import SizeButtonGroupCode from './size.stories?raw';
import { GapGroupButton } from './gap.stories';
import GapButtonGroupCode from './gap.stories?raw';

export default {
  title: '组件/ButtonGroup 按钮组',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: '按钮组合在一起，形成一组操作。',
      },
    },
  },
  argTypes: {
    type: {
      name: 'type',
      description: '类型',
      table: {
        defaultValue: {
          summary: 'default',
          detail: 'default | primary | danger | success | info | warning',
        },
      },
    },
    size: {
      name: 'size',
      description: '尺寸',
      table: {
        defaultValue: {
          summary: 'middle',
          detail: 'small | middle | large',
        },
      },
    },
    gap: {
      name: 'gap',
      description: '间距',
      table: {
        defaultValue: {
          summary: 0,
          detail: 'number',
        },
      },
    },
  },
} as Meta<typeof Button>;

// 按钮类型
export const StoryButtonGroup: StoryFn = TypeGroupButton;
StoryButtonGroup.storyName = '基础用法';
StoryButtonGroup.parameters = {
  docs: {
    source: {
      code: TypeButtonGroupCode,
    },
    description: {
      story: `使用 type 来统一所有按钮的样式。`,
    },
  },
};

// 按钮组尺寸
export const StorySizeButtonGroup: StoryFn = SizeGroupButton;
StorySizeButtonGroup.storyName = '尺寸';
StorySizeButtonGroup.parameters = {
  docs: {
    source: {
      code: SizeButtonGroupCode,
    },
    description: {
      story: `使用 size 来统一所有按钮的尺寸。`,
    },
  },
};

// 按钮组间距
export const StoryGapButtonGroup: StoryFn = GapGroupButton;
StoryGapButtonGroup.storyName = '间距';
StoryGapButtonGroup.parameters = {
  docs: {
    source: {
      code: GapButtonGroupCode,
    },
    description: {
      story: `使用 gap 来设置按钮之间的间距。`,
    },
  },
};
