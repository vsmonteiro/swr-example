import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/users" exact component={UserList} />
      <Route path="/users/:id" component={UserDetail} />
    </BrowserRouter>
  );
}

export default Routes;
