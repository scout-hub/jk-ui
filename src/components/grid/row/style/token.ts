import { makeStyles } from "@griffel/react";

export const useBaseStyle = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(24, 1fr)',
  }
})