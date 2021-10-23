import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Header, Footer, Container } from "./styles";

import CheckInDependents from "./pages/CheckInDependents";
import CheckInParent from "./pages/CheckInParent";
import Home from "./pages/Home/index";

export default function App() {
  const history = useHistory();
  return (
    <Router>
      <Header>
        <div>
          <b>PARK CONTROL</b>
        </div>
        <div>User</div>
      </Header>
      <Container>
        <ToastContainer />
        <Switch>
          <Route
            path="/checkin/:id/dependents"
            component={CheckInDependents}
          ></Route>
          <Route
            path="/checkin"
            component={CheckInParent}
            history={history}
            exact
          ></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Container>
      <Footer>Direitos reservados @josevitorbraga</Footer>
    </Router>
  );
}
