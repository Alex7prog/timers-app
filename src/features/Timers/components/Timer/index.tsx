import { useState, useEffect, useRef, type FC } from 'react';
import dayjs from '@utils/dayjs';
import type { Timer as TimerType } from '@entities/types';

type TimerProps = TimerType & {
  controls: {
    startPauseTimer: (
      id: number,
      newTimerProp: Pick<TimerType, 'status'> & Partial<Pick<TimerType, 'started' | 'value'>>,
    ) => void;
    removeTimer: (id: number) => void;
  };
};

const Timer: FC<TimerProps> = ({
  id,
  title,
  status,
  value,
  started,
  controls: { startPauseTimer, removeTimer },
}) => {
  const [isRunning, setIsRunning] = useState(status === 'active' ? true : false);
  const [elapsedTime, setElapsedTime] = useState(value);
  const startTimeRef = useRef(started);
  const intervalIdRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(dayjs().valueOf() - startTimeRef.current);
      }, 1000);
    }
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
    startTimeRef.current = dayjs().valueOf() - elapsedTime;
    startPauseTimer(id, { status: 'active', started: startTimeRef.current });
  };

  const pause = () => {
    setIsRunning(false);
    startPauseTimer(id, { status: 'paused', value: elapsedTime });
  };

  return (
    <li className="flex items-center gap-5">
      <h6 className="text-accent-text w-[129px] cursor-pointer truncate text-xl font-bold">
        {title}
      </h6>
      <span
        className={`text-secondary-text mx-[39px_22px] flex h-[50px] w-[117px] items-center justify-center rounded-md ${isRunning ? 'bg-border-dark' : 'bg-accent-bg'}`}
      >
        {dayjs.utc(elapsedTime).format('HH:mm:ss')}
      </span>
      {!isRunning && (
        <button className="button__timer bg-linear-[135deg,#009fc5,#3cecb0] pl-1" onClick={start}>
          <img src="/images/timers/run.svg" alt="run" />
        </button>
      )}
      {isRunning && (
        <button className="button__timer bg-linear-[135deg,#7956ec,#2fb9f8]" onClick={pause}>
          <img src="/images/timers/pause.svg" alt="pause" />
        </button>
      )}
      <button
        className="button__timer rounded-md bg-linear-[135deg,#f23673,#fca069]"
        onClick={() => {
          removeTimer(id);
        }}
      >
        <img src="/images/timers/delete.svg" alt="delete" />
      </button>
    </li>
  );
};

export default Timer;
