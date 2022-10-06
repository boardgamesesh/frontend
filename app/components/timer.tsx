import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { useCallback, useEffect, useState } from "react";

const Timer = ({
  player,
  onStart,
  isActivePlayer,
}: {
  player: string;
  isActivePlayer: boolean;
  onStart: () => void;
}) => {
  const [state, setState] = useState("pause");
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState<any>();

  const startTimer = () => {
    setState("play");
    onStart();

    const newIntervalId = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);

    setIntervalId(newIntervalId);
  };

  const pauseTimer = useCallback(() => {
    clearInterval(intervalId);
    setState("pause");
  }, [intervalId]);

  useEffect(() => {
    if (!isActivePlayer) {
      pauseTimer();
    }
  }, [isActivePlayer, pauseTimer]);

  return (
    <div className="rounded bg-slate-100">
      <div className="px-3 py-1 bg-slate-500 text-white font-bold rounded-t-lg">
        {player} {isActivePlayer && `(active)`}
      </div>
      <div className="flex flex-row gap-3 flex-wrap p-3">
        <span className="text-slate-700 text-6xl grow">{time}</span>
        <div>
          {state === "play" && (
            <button
              onClick={pauseTimer}
              type="button"
              className="flex items-center justify-center gap-2 border border-slate-500 bg-white px-2 py-1 rounded w-full hover:drop-shadow hover:bg-slate-200"
            >
              <BsPauseFill />
              Pause
            </button>
          )}
          {state === "pause" && (
            <button
              onClick={startTimer}
              type="button"
              className="flex items-center justify-center gap-2 border border-green-500 bg-white px-2 py-1 rounded w-full hover:drop-shadow hover:bg-green-100"
            >
              <BsPlayFill />
              Start
            </button>
          )}
        </div>
        <ul className="flex flex-col gap-2">
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Timer;
