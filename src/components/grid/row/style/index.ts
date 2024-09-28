import { mergeClasses } from "@griffel/react";
import { RowProps } from "../../grid.types";
import { useBaseStyle } from "./token";

export const useStyleByProps = (props: RowProps) => {
  const { className } = props;
  const cls = useBaseStyle();
  return mergeClasses('jk-row', cls.root, className);
}