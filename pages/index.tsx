import LandingLayout from "@layouts/LandingLayout";
import Link from "next/link";
import Head from "next/head";

export default function Page() {
  return (
    <LandingLayout>
      <Head>
        <title>Welcome</title>
      </Head>
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
    </LandingLayout>
  );
}
