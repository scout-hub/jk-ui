export type ButtonTypes = "primary" | "default" | "danger" | "success" | "info" | "warning";

export type SizeTypes = "small" | "middle" | "large";

type MergedHTMLAttributes = Omit<
  React.HTMLAttributes<HTMLElement> &
  React.ButtonHTMLAttributes<HTMLElement>,
  'type'
>;

export type ButtonProps = {
  type?: ButtonTypes;
  children?: React.ReactNode;
  disabled?: boolean;
  size?: SizeTypes;
} & MergedHTMLAttributes;