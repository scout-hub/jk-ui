export type ButtonTypes = "primary" | "default" | "danger" | "success" | "info" | "warning";

export type SizeTypes = "small" | "middle" | "large";

export type GroupButtonContextType = {
  size?: SizeTypes;
  type?: ButtonTypes;
  disabled?: boolean;
} | undefined;

type MergedHTMLAttributes = Omit<
  React.HTMLAttributes<HTMLElement> &
  React.ButtonHTMLAttributes<HTMLElement>,
  'type'
>;

export type ButtonProps = {
  type?: ButtonTypes;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  disabled?: boolean;
  size?: SizeTypes;
} & MergedHTMLAttributes;

export type ButtonGroupProps = ButtonProps &
{
  gap?: number;
};