import { useEffect, useState, createContext, useContext } from "react";
import padWithZeros from "~/client/templates-editor/countdown-widget/utils/padWithZeros";

const initialState = {
  minutes: 0,
  seconds: 59,
  counterMode: false,
  itemClazzName: "",
};

interface SimpleTimerContextProps {
  minutes?: number;
  seconds: number;
  itemClazzName?: string;
  counterMode?: boolean;
}

const SimpleTimerContext = createContext<SimpleTimerContextProps>({
  ...initialState,
});

export default function SimpleTimer({
  itemClazzName,
  seconds,
  minutes,
  counterMode,
}: SimpleTimerContextProps) {
  return (
    <SimpleTimerContext.Provider
      value={{
        minutes: minutes || initialState.minutes,
        itemClazzName: itemClazzName || initialState.itemClazzName,
        seconds: seconds || initialState.seconds,
        counterMode: counterMode || initialState.counterMode,
      }}
    >
      <Timer />
    </SimpleTimerContext.Provider>
  );
}

function Timer() {
  const seconds = useSeconds();
  const { counterMode } = useContext(SimpleTimerContext);

  return (
    <div
      className={`grid w-max ${
        counterMode === true ? "grid-cols-1" : "grid-cols-5"
      } grid-rows-1 justify-items-center`}
    >
      {counterMode === false && (
        <>
          <TimerItem value={"00"} />
          <TimerItem value={":"} />
          <TimerItem value={"00"} />
          <TimerItem value={":"} />
        </>
      )}

      <TimerItem
        value={padWithZeros(seconds, 2)}
        isDanger={seconds <= 10 && seconds > 5}
        isExtraDanger={seconds <= 5}
        itemClazzName={seconds <= 5 ? `animate-pulse` : ``}
      />
    </div>
  );
}

interface TimerItemProps {
  isDanger?: boolean;
  isExtraDanger?: boolean;
  itemClazzName?: string;
  value: string;
}

function TimerItem({
  isDanger,
  isExtraDanger,
  itemClazzName,
  value,
}: TimerItemProps) {
  const { itemClazzName: ctxItemClazzName } = useContext(SimpleTimerContext);

  return (
    <span
      className={`${isDanger && `text-red-700`} ${
        isExtraDanger && `font-extrabold text-red-500`
      } ${itemClazzName} ${ctxItemClazzName}`}
    >
      {value}
    </span>
  );
}

function useSeconds() {
  const { seconds: startSeconds } = useContext(SimpleTimerContext);

  const [seconds, setSeconds] = useState(startSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1200);

    if (seconds === 0) {
      clearInterval(interval);
      setSeconds(startSeconds);
    }

    return () => clearInterval(interval);
  }, [seconds, startSeconds]);

  return seconds;
}
