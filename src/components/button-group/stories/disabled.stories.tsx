import { Button, ButtonGroup } from 'jkyun-ui';

export const DisabledButtonGroup = () => {
  return (
    <ButtonGroup disabled>
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="danger">Danger</Button>
      <Button type="success">Success</Button>
      <Button type="info">Info</Button>
      <Button type="warning">Warning</Button>
    </ButtonGroup>
  );
};
