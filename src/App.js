import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Toolbar from "./components/Toolbar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import TodosPage from "./Pages/TodosPage";
import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        <Toolbar />
        <div className="container">
          <h1>Todo APP</h1>
          <Switch>
            <Route path="/home" exact>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/toolbar" exact>
              <TodosPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
