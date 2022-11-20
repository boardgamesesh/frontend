import { buttonStyle } from "@components/Button";
import { Card } from "@components/Card";
import LandingLayout from "@layouts/LandingLayout";
import Link from "next/link";

export default function Page() {
  return (
    <LandingLayout>
      <Card intent="highlight">
        <h3 className="text-2xl flex-1 text-purple-700 font-bold">
          Welcome to Boardgame Sesh!
        </h3>
        <div>
          <Link href="/signup" className={buttonStyle()}>
            Sign up
          </Link>
        </div>
      </Card>
    </LandingLayout>
  );
}
