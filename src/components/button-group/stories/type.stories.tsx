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

export const TypeButtonGroup = () => {
  const style = useClasses();

  return (
    <div className={style.root}>
      <ButtonGroup>
        <Button>Default</Button>
        <Button>Default</Button>
      </ButtonGroup>
      <ButtonGroup type="primary">
        <Button>Primary</Button>
        <Button>Primary</Button>
      </ButtonGroup>
      <ButtonGroup type="danger">
        <Button>Primary</Button>
        <Button>Primary</Button>
      </ButtonGroup>
      <ButtonGroup type="success">
        <Button>Primary</Button>
        <Button>Primary</Button>
      </ButtonGroup>
      <ButtonGroup type="info">
        <Button>Primary</Button>
        <Button>Primary</Button>
      </ButtonGroup>
      <ButtonGroup type="warning">
        <Button>Primary</Button>
        <Button>Primary</Button>
      </ButtonGroup>
    </div>
  );
};

// todo：主题销毁导致其他控件样式丢失
