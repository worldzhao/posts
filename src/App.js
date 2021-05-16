import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { Helmet } from "react-helmet";

import { config } from "./config";
import { client } from "./utils/apollo";
import Router from "./Router";
import GithubCallback from "./containers/GithubCallback";

const Application = () => {
  const urlParams = new URLSearchParams(window.location.search);

  if (urlParams.get("code")) {
    return <GithubCallback />;
  }

  return (
    <>
      <Helmet>
        <title>{config.title}</title>
        <meta charSet="utf-8" />
      </Helmet>
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </>
  );
};

export default Application;
