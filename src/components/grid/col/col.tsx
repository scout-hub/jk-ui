import { ColProps } from '../grid.types';

export const Col: React.FC<ColProps> = (props) => {
  const { children, style } = props;
  return <div style={style}>{children}</div>;
};
