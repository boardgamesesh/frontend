import { FC } from 'react';
import { Button } from '~honeycomb';
import { useSession, signIn, signOut } from 'next-auth/react';

const SignInButton = (): JSX.Element => {
  const { data: session } = useSession();

  if (session?.user) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <Button onClick={signOut}>Sign out</Button>
      </>
    );
  }

  return (
    <>
      Not signed in <br />
      <Button onClick={signIn}>Sign in</Button>
    </>
  );
};

export default SignInButton;
