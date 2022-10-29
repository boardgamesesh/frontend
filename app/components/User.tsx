import { graphQLClient } from "~/lib/apollo";
import { gql } from "@apollo/client";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";

const query = gql`
  query GetUser {
    user(id: "_28YmZ0rnXQRy3JkeLnX0") {
      email
    }
  }
`;

export const loader: LoaderFunction = async () => {
  const { data } = await graphQLClient.query({
    query,
  });
  console.info("data", data);

  return data;
};

export default function User() {
  const data = useLoaderData();
  return <>Geoff</>;
}
