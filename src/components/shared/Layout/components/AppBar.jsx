import React, { useState } from "react";
import MuiAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { Hidden } from "@material-ui/core";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { SideList } from "../../SideList/SideList";
import { ChangeLanguage } from "../../ChangeLanguage/ChangeLanguage";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: 400,
    color: 'white'
  },
}));

function iOS() {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
  // iPad on iOS 13 detection
  || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}

export const AppBar = (props) => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { t } = useTranslation();

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <MuiAppBar position="static" color={"secondary"}>
      <Toolbar>
        <Hidden mdUp>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor={"left"}
            open={drawerOpen}
            onClose={closeDrawer}
            onOpen={openDrawer}
          >
            <SideList />
          </SwipeableDrawer>
        </Hidden>
        <Typography variant="h6" className={classes.title}>
          {t('name')}
        </Typography>
        <ChangeLanguage />
      </Toolbar>
    </MuiAppBar>
  );
};
