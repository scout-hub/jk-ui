/*
 * @Author: Zhouqi
 * @Date: 2024-09-13 14:22:44
 * @LastEditors: Zhouqi
 * @LastEditTime: 2024-09-19 20:45:08
 */
import type { Meta, StoryFn } from '@storybook/react';
import { Button } from 'jkyun-ui';
import { TypeButton } from './type.stories';
import TypeButtonCode from './type.stories?raw';
import { DisabledButton } from './disabled.stories';
import DisabledButtonCode from './disabled.stories?raw';
import { SizeButton } from './size.stories';
import SizeButtonCode from './size.stories?raw';

export default {
  title: '组件/Button 按钮',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: '常用的操作按钮。',
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
    disabled: {
      name: 'disabled',
      description: '按钮是否为禁用状态',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
} as Meta<typeof Button>;

// 按钮 type 属性
export const StoryTypeButton: StoryFn = TypeButton;

StoryTypeButton.storyName = '基础用法';
StoryTypeButton.parameters = {
  docs: {
    source: {
      code: TypeButtonCode,
    },
    description: {
      story: '使用 type 来定义按钮的样式。',
    },
  },
};

// 按钮 disabled 属性
export const StoryDisabledButton: StoryFn = DisabledButton;
StoryDisabledButton.storyName = '禁用状态';
StoryDisabledButton.parameters = {
  docs: {
    source: {
      code: DisabledButtonCode,
    },
    description: {
      story: `你可以使用 disabled 属性来定义按钮是否被禁用。
      使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。`,
    },
  },
};

// 按钮 size 属性
export const StorySizeButton: StoryFn = SizeButton;
StorySizeButton.storyName = '按钮尺寸';
StorySizeButton.parameters = {
  docs: {
    source: {
      code: SizeButtonCode,
    },
    description: {
      story: `按钮有大、中、小三种尺寸。通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。`,
    },
  },
};
