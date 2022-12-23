import Link from "next/link";
import { useRouter } from "next/router";
import { gql, useMutation, useQuery } from "@apollo/client";

import { useEffect } from "react";

const SIGN_IN = gql`
  mutation SignIn($id: ID!, $secretToken: ID!) {
    signIn(id: $id, secretToken: $secretToken) {
      id
    }
  }
`;

const MY_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      email
    }
  }
`;

export default function Page() {
  const router = useRouter();
  const { token, id } = router.query;
  const {
    data: userData,
    loading: userLoading,
    error: userError,
  } = useQuery(MY_USER, {
    variables: {
      id: "RZxkLgwBptW8UtVO2hw_v",
    },
  });
  const [signIn, { data, loading, error }] = useMutation(SIGN_IN, {
    variables: {
      id: "RZxkLgwBptW8UtVO2hw_v",
      secretToken: "PlGx72cIybkjVbMfv04zp",
    },
  });

  useEffect(() => {
    signIn();
    console.info("userData", userData);
  }, [signIn, userData]);

  if (loading) return "Loading...";

  return (
    <>
      <h1>Hello, Signup Page</h1> <Link href="/dashboard">Signup</Link>
      {JSON.stringify(data)}
    </>
  );
}
