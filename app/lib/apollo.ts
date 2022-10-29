import { ApolloClient, InMemoryCache } from "@apollo/client";

export const graphQLClient = new ApolloClient({
  uri: "https://q1521dhfh2.execute-api.ap-southeast-2.amazonaws.com/",
  cache: new InMemoryCache(),
  ssrMode: true,
});
