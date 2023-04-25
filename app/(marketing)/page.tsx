import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BoardgameSesh",
  description: "Organise your next boardgame session with ease.",
  openGraph: {
    images: ["/logomark.png"],
  },
};

export default function Page() {
  return (
    <div className="flex bg-violet-100">
      <h3 className="text-2xl flex-1 text-purple-700 font-bold">
        Welcome to Boardgame Sesh!
      </h3>
      <div>
        <Link href="/signup" className="bg-violet-500">
          Sign up
        </Link>
      </div>
    </div>
  );
}
