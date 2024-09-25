import { makeStyles } from "@griffel/react";

export const useBaseStyle = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  notHasGap: {
    '&>.jk-button': {
      borderRadius: 0,
    },
    '&>.jk-button:not(:first-child)': {
      borderLeft: '1px solid #ffffff'
    }
  },
  hasGap: {
    '&>.jk-button': {
      borderRadius: '4px',
    },
  }
})