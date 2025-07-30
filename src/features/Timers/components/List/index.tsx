import Timer from '@features/Timers/components/Timer';
import type { FC } from 'react';
import type { Timer as TimerType } from '@entities/types';

type ListProps = {
  timers: TimerType[];
  controls: {
    updateTimer: (
      id: number,
      newTimerProp: Pick<TimerType, 'status'> & Partial<Pick<TimerType, 'started' | 'value'>>,
    ) => void;
    removeTimer: (id: number) => void;
  };
};

const List: FC<ListProps> = ({ timers, controls }) => {
  return (
    <ul className="flex flex-col gap-10">
      {timers.map(timer => (
        <Timer key={timer.id} controls={controls} {...timer} />
      ))}
    </ul>
  );
};

export default List;
