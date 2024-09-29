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

export const ColumnGrid = () => {
  const styles = useClasses();

  return (
    <div>
      <Row column={12} className={styles.root}>
        <Col span={6}></Col>
        <Col span={3}></Col>
        <Col span={3}></Col>
      </Row>
      <Row column={9} className={styles.root}>
        <Col span={3}></Col>
        <Col span={3}></Col>
        <Col span={3}></Col>
      </Row>
      <Row column={14} className={styles.root}>
        <Col span={3}></Col>
        <Col span={3}></Col>
        <Col span={8}></Col>
      </Row>
    </div>
  );
};
