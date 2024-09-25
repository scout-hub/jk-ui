import { Button } from 'jkyun-ui';
import { makeStyles } from '@griffel/react';

const useClasses = makeStyles({
  root: {
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
});

export const SizeButton = () => {
  const styles = useClasses();
  return (
    <div className={styles.root}>
      <Button size="large">large</Button>
      <Button>Default</Button>
      <Button size="small">Small</Button>
    </div>
  );
};
