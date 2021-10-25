import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import ParkProvider from "./context/parkContext";

import { ToastContainer } from "react-toastify";

import { Header, Footer, Container } from "./styles";

import CheckInDependents from "./pages/CheckInDependents";
import CheckInParent from "./pages/CheckInParent";
import Home from "./pages/Home/index";
import CheckInReceipt from "./pages/CheckInReceipt";

export default function App() {
  const history = useHistory();
  return (
    <ParkProvider>
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
              path="/checkin/:id/dependents/:childId"
              component={CheckInReceipt}
            />
            <Route
              path="/checkin/:id/dependents"
              component={CheckInDependents}
            />
            <Route
              path="/checkin"
              component={CheckInParent}
              history={history}
              exact
            />
            <Route path="/" component={Home} />
          </Switch>
        </Container>
        <Footer>Direitos reservados @josevitorbraga</Footer>
      </Router>
    </ParkProvider>
  );
}
