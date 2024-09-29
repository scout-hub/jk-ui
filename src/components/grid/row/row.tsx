// row.tsx
import React, { ReactNode } from 'react';
import { RowProps, ColProps } from '../grid.types';
import { useStyleByProps } from './style';
import { isArray } from '@/utils';

const renderCol = (children: ReactNode | ReactNode[]): ReactNode => {
  let start = 1;
  return isArray(children)
    ? children.map((child, index) => {
        if (Array.isArray(child)) return renderCol(child);
        if (React.isValidElement<ColProps>(child)) {
          const span = child.props?.span || 0;
          const colSpan = span > 0 ? span : 24;
          let end = start + colSpan;
          // 如果超出24列，换行并重置start和end
          if (end > 25) {
            start = 1;
            end = start + colSpan;
          }
          const gridColumn = `${start}/${end}`;
          start = end;
          return React.cloneElement(child, {
            key: child.key ?? index,
            style: { gridColumn },
          });
        }
        return child;
      })
    : children
    ? React.isValidElement<ColProps>(children)
      ? React.cloneElement(children, {
          style: {
            gridColumn: `1 / ${
              ((children?.props?.span ?? 0) > 0
                ? children?.props?.span ?? 0
                : 24) + 1
            }`,
          },
        })
      : children
    : children;
};

// Row 组件被划分为 24列，Col 组件的 span 属性表示占据的列数，这里需要根据 span 属性计算 gridColumn 的值
export const Row: React.FC<RowProps> = (props) => {
  const { children, className, gutter = 0, style, column = 24 } = props;
  const { cls, dynamicStyle } = useStyleByProps({
    className,
    gutter,
    style,
    column,
  });
  return (
    <div style={dynamicStyle} className={cls}>
      {renderCol(children)}
    </div>
  );
};
