"use client";

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://97ff7w8216.execute-api.ap-southeast-2.amazonaws.com",
  cache: new InMemoryCache(),
});

export default client;
