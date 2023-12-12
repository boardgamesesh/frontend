import { Button } from '~honeycomb';
import { useSession, signIn, signOut } from 'next-auth/react';

export const SignInButton = () => {
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
