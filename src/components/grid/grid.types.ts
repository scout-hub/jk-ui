export type RowProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactElement<ColProps>[]
}
export type ColProps = React.HTMLAttributes<HTMLDivElement> & {
  span?: number;
  gridColumn?: string;
}