import { Link } from "@remix-run/react";
import { button } from "~/components/Button";

export default function Landing() {
  return (
    <div className="p-7 bg-purple-50 rounded-xl flex flex-col gap-5">
      <h3 className="text-2xl flex-1 text-purple-700 font-bold">
        Welcome to Boardgame Sesh!
      </h3>
      <div>
        <Link to="/signup" className={button()}>
          Sign up
        </Link>
      </div>
    </div>
  );
}
