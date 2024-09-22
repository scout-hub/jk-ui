import { Button } from 'jkyun-ui';
import { makeStyles } from '@griffel/react';
import { MouseEvent } from 'react';

const useClasses = makeStyles({
  root: {
    padding: '10px',
    display: 'flex',
    gap: '10px',
  },
});

const clickEvent = (e: MouseEvent<HTMLButtonElement>) => {
  alert(e.currentTarget.innerText);
};

export const TypeButton = () => {
  const styles = useClasses();

  return (
    <div className={styles.root}>
      <Button onClick={clickEvent}>Default</Button>
      <Button type="primary" onClick={clickEvent}>
        Primary
      </Button>
      <Button type="danger" onClick={clickEvent}>
        Danger
      </Button>
      <Button type="success" onClick={clickEvent}>
        Success
      </Button>
      <Button type="info" onClick={clickEvent}>
        Info
      </Button>
      <Button type="warning" onClick={clickEvent}>
        Warning
      </Button>
    </div>
  );
};
