import "@styles/globals.css";
import Link from "next/link";

export default function SessionLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  return (
    <>
      <section>{children}</section>
    </>
  );
}
