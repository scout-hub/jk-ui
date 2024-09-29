import { Row, Col } from 'jkyun-ui';
import { makeStyles } from '@griffel/react';

const useClasses = makeStyles({
  root: {
    marginBottom: '20px',
    '&>div': {
      height: '36px',
    },
    '&>div:nth-child(even)': {
      backgroundColor: '#d3dce6',
    },
    '&>div:nth-child(odd)': {
      backgroundColor: '#e5e9f2',
    },
  },
});

export const BlendGrid = () => {
  const styles = useClasses();

  return (
    <div>
      <Row gutter={10} className={styles.root}>
        <Col span={16}></Col>
        <Col span={8}></Col>
        <Col span={8}></Col>
        <Col span={8}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={16}></Col>
        <Col span={4}></Col>
      </Row>
    </div>
  );
};
