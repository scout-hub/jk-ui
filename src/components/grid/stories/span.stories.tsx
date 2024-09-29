import { Row, Col } from 'jkyun-ui';
import { makeStyles } from '@griffel/react';

const useClasses = makeStyles({
  root: {
    marginBottom: '10px',
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

export const SpanGrid = () => {
  const styles = useClasses();

  return (
    <div>
      <Row className={styles.root}>
        <Col></Col>
      </Row>
      <Row className={styles.root}>
        <Col span={12}></Col>
        <Col span={12}></Col>
      </Row>
      <Row className={styles.root}>
        <Col span={8}></Col>
        <Col span={8}></Col>
        <Col span={8}></Col>
      </Row>
      <Row className={styles.root}>
        <Col span={6}></Col>
        <Col span={6}></Col>
        <Col span={6}></Col>
        <Col span={6}></Col>
      </Row>
      <Row className={styles.root}>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
      </Row>
    </div>
  );
};
