import React, { ReactNode } from "react";
import { createUseStyles } from "react-jss";

type Props = {
  children: ReactNode;
};

const useStyles = createUseStyles({
  container: {
    display: "flex",
  },
});

function Container({ children }: Props) {
  const classes = useStyles();

  return <main className={classes.container}>{children}</main>;
}

export default Container;
