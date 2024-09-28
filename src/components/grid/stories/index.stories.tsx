/*
 * @Author: Zhouqi
 * @Date: 2024-09-13 14:22:44
 * @LastEditors: Zhouqi
 * @LastEditTime: 2024-09-19 20:45:08
 */
import { makeStyles } from '@griffel/react';
import type { StoryFn } from '@storybook/react';
import { Col, Row } from 'jkyun-ui';

export default {
  title: '组件/Grid 栅格',
  parameters: {
    docs: {
      description: {
        component: '通过基础的 24 分栏，迅速简便地创建布局。',
      },
    },
  },
  // argTypes: {
  //   type: {
  //     name: 'type',
  //     description: '类型',
  //     control: {
  //       type: 'select',
  //     },
  //     options: ['default', 'primary', 'danger', 'success', 'info', 'warning'],
  //     table: {
  //       defaultValue: {
  //         summary: 'default',
  //         detail: 'default | primary | danger | success | info | warning',
  //       },
  //     },
  //   },
  // },
};

const useBaseStyle = makeStyles({
  d3dce6: {
    height: '36px',
    backgroundColor: '#d3dce6',
  },
  e5e9f2: {
    height: '36px',
    backgroundColor: '#e5e9f2',
  },
});

const Template: StoryFn = (args) => {
  const style = useBaseStyle();
  return (
    <Row {...args}>
      <Col span={4}>
        <div className={style.d3dce6}></div>
      </Col>
      <Col span={8}>
        <div className={style.e5e9f2}></div>
      </Col>
      <Col span={8}>
        <div className={style.d3dce6}></div>
      </Col>
      <Col span={4}>
        <div className={style.e5e9f2}></div>
      </Col>
    </Row>
  );
};
export const DefaultGridLayout: StoryFn = Template.bind({});
