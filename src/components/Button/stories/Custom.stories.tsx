import { Button } from "jk-ui";
import { makeStyles } from "@griffel/react";


const useClasses = makeStyles({
  root:{
    padding: "10px",
  }
});

export const Custom = () => {
  const styles = useClasses();
  return <div className={styles.root}>
    <Button />
  </div>
}