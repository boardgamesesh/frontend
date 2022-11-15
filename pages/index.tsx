import { buttonStyle } from "@components/Button";
import LandingLayout from "@layouts/LandingLayout";
import Link from "next/link";

export default function Page() {
  return (
    <LandingLayout>
      <div className="p-7 bg-purple-50 rounded-xl flex flex-col gap-5">
        <h3 className="text-2xl flex-1 text-purple-700 font-bold">
          Welcome to Boardgame Sesh!
        </h3>
        <div>
          <Link href="/login" className={buttonStyle()}>
            Login
          </Link>
        </div>
      </div>
    </LandingLayout>
  );
}
