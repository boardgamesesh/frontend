import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://dav78fegll.execute-api.ap-southeast-2.amazonaws.com/",
  cache: new InMemoryCache(),
});

export default client;
