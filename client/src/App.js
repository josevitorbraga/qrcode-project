import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header, Footer, Container } from "./styles";

import CheckInParent from "./pages/CheckInParent";
import Home from "./pages/Home/index";

export default function App() {
  return (
    <Router>
      <Header>
        <div>
          <b>PARK CONTROL</b>
        </div>
        <div>User</div>
      </Header>
      <Container>
        <Switch>
          <Route path="/checkin" component={CheckInParent} exact></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Container>
      <Footer>Direitos reservados @josevitorbraga</Footer>
    </Router>
  );
}
