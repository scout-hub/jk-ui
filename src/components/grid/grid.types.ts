
export type RowProps = React.HTMLAttributes<HTMLDivElement> & {
  gutter?: number | [number, number];
  column?: number;
}
export type ColProps = React.HTMLAttributes<HTMLDivElement> & {
  span?: number;
}