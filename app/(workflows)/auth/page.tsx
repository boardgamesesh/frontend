"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
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
  const searchParams = useSearchParams();
  const secretToken = searchParams.get("token");
  const id = searchParams.get("id");

  const storedAuth = JSON.parse(localStorage.getItem("auth") || "{}");
  const { id: storedId } = storedAuth;

  const {
    data: userData,
    loading: userLoading,
    error: userError,
  } = useQuery(MY_USER, {
    variables: {
      id: storedId,
    },
  });

  const [signIn, { data, loading, error }] = useMutation(SIGN_IN, {
    variables: {
      id,
      secretToken,
    },
  });

  useEffect(() => {
    signIn();
    console.info("userData", userData);
  }, [signIn, userData]);

  if (loading) return "Loading...";

  return (
    <>
      <h1>Hello, Signup Page</h1> <Link href="/signup">Signup</Link>
      {JSON.stringify(data)}
    </>
  );
}
