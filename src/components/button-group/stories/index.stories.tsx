/*
 * @Author: Zhouqi
 * @Date: 2024-09-13 14:22:44
 * @LastEditors: Zhouqi
 * @LastEditTime: 2024-09-19 20:45:08
 */
import type { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonGroup } from 'jkyun-ui';
import { TypeButtonGroup } from './type.stories';
import TypeButtonGroupCode from './type.stories?raw';
import { SizeButtonGroup } from './size.stories';
import SizeButtonGroupCode from './size.stories?raw';
import { GapButtonGroup } from './gap.stories';
import GapButtonGroupCode from './gap.stories?raw';
import { DisabledButtonGroup } from './disabled.stories';
import DisabledButtonGroupCode from './disabled.stories?raw';

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
      control: {
        type: 'select',
      },
      options: ['default', 'primary', 'danger', 'success', 'info', 'warning'],
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
      control: {
        type: 'select',
      },
      options: ['small', 'middle', 'large'],
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
      control: {
        type: 'number',
      },
      table: {
        defaultValue: {
          summary: 0,
          detail: 'number',
        },
      },
    },
    disabled: {
      name: 'disabled',
      description: '是否禁用',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: 'false',
          detail: 'boolean',
        },
      },
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn = (args) => (
  <ButtonGroup {...args}>
    <Button>Default</Button>
    <Button>Primary</Button>
    <Button>Danger</Button>
  </ButtonGroup>
);

export const DefaultButtonGroup: StoryFn = Template.bind({});
DefaultButtonGroup.args = {
  type: 'primary',
  size: 'middle',
  gap: 0,
  disabled: false,
};

// 按钮类型
export const StoryButtonGroup: StoryFn = TypeButtonGroup;
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
export const StorySizeButtonGroup: StoryFn = SizeButtonGroup;
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
export const StoryGapButtonGroup: StoryFn = GapButtonGroup;
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

// 禁用状态
export const StoryDisabledButtonGroup: StoryFn = DisabledButtonGroup;
StoryDisabledButtonGroup.storyName = '禁用状态';
StoryDisabledButtonGroup.parameters = {
  docs: {
    source: {
      code: DisabledButtonGroupCode,
    },
    description: {
      story: `使用 disabled 来禁用按钮组。`,
    },
  },
};
