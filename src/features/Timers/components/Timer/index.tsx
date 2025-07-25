import { useState, useEffect, useRef, type FC } from 'react';
import { RunButton, PauseButton, RemoveButton } from '@features/Timers/components/Buttons';
import dayjs from '@utils/dayjs';
import type { Timer as TimerType } from '@entities/types';

type TimerProps = TimerType & {
  controls: {
    updateTimer: (
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
  controls: { updateTimer, removeTimer },
}) => {
  const startTimeRef = useRef(started);
  const intervalIdRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
  const [isRunning, setIsRunning] = useState(status === 'active' ? true : false);
  const [elapsedTime, setElapsedTime] = useState(
    isRunning ? dayjs().valueOf() - startTimeRef.current : value,
  );

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
    updateTimer(id, { status: 'active', started: startTimeRef.current });
  };

  const pause = () => {
    setIsRunning(false);
    updateTimer(id, { status: 'paused', value: elapsedTime });
  };

  return (
    <li className="flex items-center">
      <h6 className="text-accent-text w-[130px] cursor-pointer truncate text-xl/[1.5em] font-extrabold">
        {title}
      </h6>
      <span
        className={`text-secondary-text ml-[57px] flex h-[50px] w-[117px] items-center justify-center rounded-md text-[1.0625rem]/[1em] ${isRunning ? 'bg-border-dark' : 'bg-accent-bg'}`}
      >
        {dayjs.utc(elapsedTime).format('HH:mm:ss')}
      </span>
      {isRunning ? <PauseButton handler={pause} /> : <RunButton handler={start} />}
      <RemoveButton
        handler={() => {
          removeTimer(id);
        }}
      />
    </li>
  );
};

export default Timer;
