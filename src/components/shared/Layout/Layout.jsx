import { Container, Grid, Hidden } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { SideList } from "../SideList/SideList";
import { AppBar } from "./components/AppBar";
import { muiTheme } from "../theme/theme";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    minHeight: '100vh'
  },
  container: {
    padding: 40,
    [muiTheme.breakpoints.down("sm")]: {
      padding: 24
    },
  },
  content: {
    display: 'flex',
    flex: '1 1 auto',
    flexFlow: 'column'
  }
});

export const Layout = (props) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Hidden smDown>
        <SideList />
      </Hidden>
      <div className={styles.content}>
        <AppBar />
        <Container className={styles.container}>{props.children}</Container>
      </div>
    </div>
  );
};
