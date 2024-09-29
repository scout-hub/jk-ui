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

export const GutterGrid = () => {
  const styles = useClasses();

  return (
    <div>
      <Row gutter={5} className={styles.root}>
        <Col span={12}></Col>
        <Col span={12}></Col>
        <Col span={12}></Col>
        <Col span={12}></Col>
      </Row>
      <Row gutter={[5, 0]} className={styles.root}>
        <Col span={8}></Col>
        <Col span={8}></Col>
        <Col span={8}></Col>
        <Col span={8}></Col>
        <Col span={8}></Col>
        <Col span={8}></Col>
      </Row>
      <Row gutter={[0, 5]} className={styles.root}>
        <Col span={12}></Col>
        <Col span={12}></Col>
        <Col span={12}></Col>
        <Col span={12}></Col>
      </Row>
    </div>
  );
};
