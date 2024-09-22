import { Button } from 'jkyun-ui';
import { makeStyles } from '@griffel/react';

const useClasses = makeStyles({
  root: {
    padding: '10px',
    display: 'flex',
    gap: '10px',
  },
});

export const DisabledButton = () => {
  const styles = useClasses();
  return (
    <div className={styles.root}>
      <Button disabled onClick={() => alert('disabled')}>
        Default
      </Button>
      <Button type="primary" disabled>
        Primary
      </Button>
      <Button type="danger" disabled>
        Danger
      </Button>
      <Button type="success" disabled>
        Success
      </Button>
      <Button type="info" disabled>
        Info
      </Button>
      <Button type="warning" disabled>
        Warning
      </Button>
    </div>
  );
};
