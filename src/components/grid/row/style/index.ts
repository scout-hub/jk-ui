import { mergeClasses } from "@griffel/react";
import { RowProps } from "../../grid.types";
import { useBaseStyle } from "./token";

const getGapStyle = (gutter: number | [number, number]) => {
  if (Array.isArray(gutter)) {
    return {
      gridColumnGap: `${gutter[0]}px`,
      gridRowGap: `${gutter[1]}px`,
    };
  }
  return {
    gridGap: `${gutter <= 0 ? 0 : gutter}px`,
  };
}

export const useStyleByProps = (props: Required<Pick<RowProps, 'column' | 'gutter'>> & Partial<Omit<RowProps, 'column' | 'gutter'>>) => {
  const { className, gutter, style, column } = props;
  const cls = useBaseStyle();
  const dynamicStyle = {
    ...getGapStyle(gutter),
    gridTemplateColumns: `repeat(${column <= 0 ? 24 : column}, 1fr)`,
    ...style,
  }
  return {
    cls: mergeClasses('jk-row', cls.root, className),
    dynamicStyle
  }
}