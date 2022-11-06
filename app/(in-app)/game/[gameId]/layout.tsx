import "@styles/globals.css";
import Link from "next/link";

export default function GameLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { gameId: string };
}) {
  console.info("params", params);
  return (
    <>
      <Link href={`game/${params.gameId}/preparing`}>Preparing</Link>
      <Link href={`game/${params.gameId}/playing`}>Playing</Link>
      <Link href={`game/${params.gameId}/scoring`}>Scoring</Link>
      <section>{children}</section>
    </>
  );
}
