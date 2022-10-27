import { useState } from "react";
import Timer from "~/components/timer";

const Playing = () => {
  const [activePlayer, setActivePlayer] = useState<string>();

  return (
    <div>
      <ul className="grid grid-cols-3 gap-4">
        <li>
          <Timer
            player="Geoff"
            isActivePlayer={activePlayer === "Geoff"}
            onStart={() => setActivePlayer("Geoff")}
          />
        </li>
        <li>
          <Timer
            player="119"
            isActivePlayer={activePlayer === "119"}
            onStart={() => setActivePlayer("119")}
          />
        </li>
        <li>
          <Timer
            player="nizmox"
            isActivePlayer={activePlayer === "nizmox"}
            onStart={() => setActivePlayer("nizmox")}
          />
        </li>
        <li>
          <Timer
            player="mercury"
            isActivePlayer={activePlayer === "mercury"}
            onStart={() => setActivePlayer("mercury")}
          />
        </li>
        <li>
          <Timer
            player="Dayne"
            isActivePlayer={activePlayer === "Dayne"}
            onStart={() => setActivePlayer("Dayne")}
          />
        </li>
      </ul>
    </div>
  );
};

export default Playing;
