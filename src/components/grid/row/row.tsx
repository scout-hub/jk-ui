import React from 'react';
import { ColProps, RowProps } from '../grid.types';
import { useStyleByProps } from './style';
import { isArray } from '@/utils';

const renderCol = (children?: React.ReactElement<ColProps>[]) => {
  let start = 1;
  return isArray(children)
    ? children?.map((child, index) => {
        if (React.isValidElement(child)) {
          const colSpan = (child.props as ColProps).span || 24;
          let end = start + colSpan;
          // 如果超出24列，换行并重置start和end
          if (end > 25) {
            start = 1;
            end = start + colSpan;
          }
          const gridColumn = `${start}/${end}`;
          start = end;
          return React.cloneElement(child, {
            key: index,
            gridColumn,
          });
        }
        return child;
      })
    : children;
};

// Row 组件被划分为 24列，Col 组件的 span 属性表示占据的列数，这里需要根据 span 属性计算 gridColumn 的值
export const Row: React.FC<RowProps> = (props) => {
  const { children, className, style } = props;
  const cls = useStyleByProps({ className });
  return (
    <div style={style} className={cls}>
      {renderCol(children)}
    </div>
  );
};
