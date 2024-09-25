import { ButtonGroup, Button } from 'jkyun-ui';
import { makeStyles } from '@griffel/react';

const useClasses = makeStyles({
  root: {
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
});

export const GapGroupButton = () => {
  const styles = useClasses();

  return (
    <div className={styles.root}>
      <ButtonGroup type="primary" gap={5}>
        <Button>Default</Button>
        <Button>Primary</Button>
        <Button>Danger</Button>
      </ButtonGroup>
      <ButtonGroup type="primary">
        <Button>Success</Button>
        <Button>Info</Button>
        <Button>Warning</Button>
      </ButtonGroup>
    </div>
  );
};
