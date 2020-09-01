import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { HomePage } from "./pages/home";
import { ThemeProvider } from "@material-ui/core";
import { muiTheme } from "./components/shared/theme/theme";
import { IntroductionPage } from "./pages/introduction";
import { Layout } from "./components/shared/Layout/Layout";
import { TheRuleOfMoveableBallastPage } from "./pages/rules/TheRuleOfMoveableBallast";

function App() {
  return (
    <div style={{background: "#fafafa"}} className="App">
      <CssBaseline />
      <ThemeProvider theme={muiTheme}>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/introduction">
              <IntroductionPage />
            </Route>
            {/* RULES */}
            <Route path="/rules/the-rule-of-moveable-ballast">
              <TheRuleOfMoveableBallastPage />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
