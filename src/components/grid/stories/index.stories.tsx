/*
 * @Author: Zhouqi
 * @Date: 2024-09-13 14:22:44
 * @LastEditors: Zhouqi
 * @LastEditTime: 2024-09-19 20:45:08
 */
import { makeStyles } from '@griffel/react';
import type { StoryFn } from '@storybook/react';
import { Col, Row } from 'jkyun-ui';
import { SpanGrid } from './span.stories';
import SpanGridCode from './span.stories?raw';
import { GutterGrid } from './gutter.stories';
import GutterGridCode from './gutter.stories?raw';
import { BlendGrid } from './blend.stories';
import BlendGridCode from './blend.stories?raw';
import { ColumnGrid } from './column.stories';
import ColumnGridCode from './column.stories?raw';

export default {
  title: '组件/Grid 栅格',
  parameters: {
    docs: {
      description: {
        component: `通过基础的 24 分栏，迅速简便地创建布局。<span style="color:red">Row 组件的子元素只能是 Col 组件</span>。`,
      },
    },
  },
  argTypes: {
    span: {
      name: 'span',
      description: '栅格占据的列数',
      control: {
        type: 'number',
      },
      table: {
        defaultValue: {
          summary: 0,
        },
      },
    },
    gutter: {
      name: 'gutter',
      description: '栅格间距',
      control: {
        type: 'array',
      },
      table: {
        type: { summary: 'number | [x: number, y: number]' },
        defaultValue: { summary: 0 },
      },
    },
    column: {
      name: 'column',
      description: '分栏数',
      control: {
        type: 'number',
      },
      table: {
        type: { summary: 'number' },
        defaultValue: {
          summary: 24,
        },
      },
    },
  },
};

const useBaseStyle = makeStyles({
  red: {
    height: '36px',
    backgroundColor: 'red',
  },
  blue: {
    height: '36px',
    backgroundColor: 'blue',
  },
  green: {
    height: '36px',
    backgroundColor: 'green',
  },
  orange: {
    height: '36px',
    backgroundColor: 'orange',
  },
});

const Template: StoryFn = (args) => {
  const style = useBaseStyle();
  const { span } = args;
  return (
    <Row {...args}>
      <Col span={span}>
        <div className={style.red}></div>
      </Col>
      <Col span={span}>
        <div className={style.blue}></div>
      </Col>
      <Col span={span}>
        <div className={style.green}></div>
      </Col>
      <Col span={span}>
        <div className={style.orange}></div>
      </Col>
    </Row>
  );
};
export const DefaultGridLayout = Template.bind({});
DefaultGridLayout.args = {
  span: 12,
  gutter: [0, 0],
  column: 24,
};

export const SpanGridLayout: StoryFn = SpanGrid;
SpanGridLayout.storyName = '基础布局';
SpanGridLayout.parameters = {
  docs: {
    source: {
      code: SpanGridCode,
    },
    description: {
      story: `使用列创建基础网格布局。通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。`,
    },
  },
};

export const GutterGridLayout: StoryFn = GutterGrid;
GutterGridLayout.storyName = '间距';
GutterGridLayout.parameters = {
  docs: {
    source: {
      code: GutterGridCode,
    },
    description: {
      story: `通过设置 gutter 属性来设置栅格间距。gutter 可以设置为数字或者数组，数组的第一个值表示水平间距，第二个值表示垂直间距。`,
    },
  },
};

export const BlendGridLayout: StoryFn = BlendGrid;
BlendGridLayout.storyName = '混合布局';
BlendGridLayout.parameters = {
  docs: {
    source: {
      code: BlendGridCode,
    },
    description: {
      story: `通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。。`,
    },
  },
};

export const ColumnGridLayout: StoryFn = ColumnGrid;
ColumnGridLayout.storyName = '分栏数';
ColumnGridLayout.parameters = {
  docs: {
    source: {
      code: ColumnGridCode,
    },
    description: {
      story: `自定义分栏数，默认为 24。`,
    },
  },
};
