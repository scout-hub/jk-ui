import { mergeClasses } from "@griffel/react";
import { ButtonGroupProps } from "../../button/button.types";
import { useBaseStyle } from "./token";
import { useMemo } from "react";

export const useStyleByProps = (props: ButtonGroupProps) => {
  const { gap, style } = props;
  const cls = useBaseStyle();
  const dynamicStyle = useMemo(() => ({
    gap,
    ...style
  }), [gap, style]);
  return {
    cls: mergeClasses('jk-button-group', cls.root, gap ? cls.hasGap : cls.notHasGap),
    dynamicStyle
  }
}