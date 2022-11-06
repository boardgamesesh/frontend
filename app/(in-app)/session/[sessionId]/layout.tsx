import "@styles/globals.css";
import Link from "next/link";

export default function SessionLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { sessionId: string };
}) {
  return (
    <>
      <section>{children}</section>
    </>
  );
}
