import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Link,
} from "react-router-dom";

import ParkProvider from "./context/parkContext";

import { ToastContainer } from "react-toastify";

import { Header, Container } from "./styles";

import CheckInDependents from "./pages/CheckInDependents";
import CheckInParent from "./pages/CheckInParent";
import Home from "./pages/Home/index";
import CheckInReceipt from "./pages/CheckInReceipt";
import CheckOut from "./pages/CheckOut";

export default function App() {
  const history = useHistory();
  return (
    <ParkProvider>
      <Router>
        <Header>
          <div>
            <Link to="/">PARK CONTROL</Link>
          </div>
          <div>User</div>
        </Header>
        <Container>
          <ToastContainer />
          <Switch>
            <Route path="/checkout" component={CheckOut} />
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
      </Router>
    </ParkProvider>
  );
}
