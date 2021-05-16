import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Blog from "./containers/Blog";
import BlogPost from "./containers/BlogPost";

const Router = () => {
  return (
    <BrowserRouter basename="posts">
      <Switch>
        <Route exact path="/" component={Blog} />
        <Route exact path="/post/:title/:issueNumber" component={BlogPost} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
