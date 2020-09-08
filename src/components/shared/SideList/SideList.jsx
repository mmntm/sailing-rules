import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { makeStyles } from "@material-ui/core/styles";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import { muiTheme } from "../theme/theme";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 280,
    zIndex: 99999,
    backgroundColor: theme.palette.background.paper,
    minHeight: "100vh",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  activeLink: {
    position: "relative",
    "&::before": {
      content: '""',
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0,
      width: 5,
      background: muiTheme.palette.secondary.dark,
    },
  },
}));

export const RuleRoutes = {
  TheRuleOfMoveableBallast: {
    link: "/rules/the-rule-of-moveable-ballast",
    nameTranslationKey: "rules.TheRuleOfMoveableBallast.name",
  },
};

export const SideList = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const { t } = useTranslation();

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {t("toc")}
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem
        button
        component={NavLink}
        to="/introduction"
        activeClassName={classes.activeLink}
      >
        <ListItemText primary={t("introduction.title")} />
      </ListItem>
      
      <ListItem
        button
        component={NavLink}
        to="/test"
        activeClassName={classes.activeLink}
      >
        <ListItemText primary={t("test.title")} />
      </ListItem>

      <ListItem button onClick={handleClick}>
        <ListItemText primary={t("rules.name")} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {Object.values(RuleRoutes).map((ruleRoute) => (
            <ListItem
              key={ruleRoute.link}
              component={NavLink}
              to={ruleRoute.link}
              activeClassName={classes.activeLink}
              button
              className={classes.nested}
            >
              <ListItemText primary={t(ruleRoute.nameTranslationKey)} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </List>
  );
};
