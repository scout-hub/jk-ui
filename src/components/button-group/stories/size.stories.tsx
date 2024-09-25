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

export const SizeGroupButton = () => {
  const styles = useClasses();

  return (
    <div className={styles.root}>
      <ButtonGroup size="large">
        <Button>Default</Button>
        <Button>Primary</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button>Danger</Button>
        <Button>Success</Button>
      </ButtonGroup>
      <ButtonGroup size="small">
        <Button>Info</Button>
        <Button>Warning</Button>
      </ButtonGroup>
    </div>
  );
};
