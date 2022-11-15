import Link from "next/link";
import { useRouter } from "next/router";

export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { gameId, session } = router.query;
  return (
    <>
      {session && (
        <Link
          href={{
            pathname: "/session/[sessionId]/",
            query: { sessionId: session },
          }}
        >
          Back to session
        </Link>
      )}
      <Link
        href={{
          pathname: "/game/[gameId]/",
          query: { gameId },
        }}
      >
        Preparing
      </Link>
      <Link
        href={{
          pathname: "/game/[gameId]/playing",
          query: { gameId },
        }}
      >
        Playing
      </Link>
      <Link
        href={{
          pathname: "/game/[gameId]/scoring",
          query: { gameId },
        }}
      >
        Scoring
      </Link>
      <section>{children}</section>
    </>
  );
}
