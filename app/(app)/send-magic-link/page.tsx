"use client";

import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

import { Button } from "~honeycomb";

const SIGN_UP = gql`
  mutation SendMagicLink($email: String!) {
    sendMagicLink(email: $email) {
      ok
    }
  }
`;

export default function Page() {
  const [email, setEmail] = useState("");
  const [signUp, { data, loading, error }] = useMutation(SIGN_UP);

  if (loading) return "Loading...";
  if (error) {
    console.log(error)
    return (
      <div>
        <h2>Something went wrong</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  if (data) {
    console.log(data, email)
    return (
      <div>
        <h2>Check your email</h2>
        <p>
          We sent you a magic link to <strong>{email}</strong>. Click the link
          to sign in.
        </p>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={() => signUp({ variables: { email }})}>
        <input
            id="email"
            type="email"
            name="email"
            value={email}
            placeholder="mary.poppins@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            type="submit"
            onClick={() => {}}
          >
            Sign up
          </Button>
      </form>
    </>
  );
}
