import { ColProps } from '../grid.types';

export const Col: React.FC<ColProps> = (props) => {
  const { children, gridColumn } = props;
  return <div style={{ gridColumn }}>{children}</div>;
};
