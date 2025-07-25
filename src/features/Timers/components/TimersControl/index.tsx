import { useState, type FC } from 'react';
import { useLocalStorage } from '@hooks/useLocalStorage';
import Timer from '@features/Timers/components/Timer';
import dayjs from '@utils/dayjs';
import { LOCAL_STORAGE_KEYS } from '@config/localstorage';
import type { Timer as TimerType } from '@entities/types';

const TimersControl: FC = () => {
  const [timers, setTimers] = useLocalStorage<TimerType[]>(LOCAL_STORAGE_KEYS.TIMERS, []);
  const [title, setName] = useState('');

  const updateTimer = (
    id: number,
    newTimerProp: Pick<TimerType, 'status'> & Partial<Pick<TimerType, 'started' | 'value'>>,
  ) => {
    const updatedTimers = timers.map(timer =>
      timer.id === id ? { ...timer, ...newTimerProp } : timer,
    );

    setTimers(updatedTimers);
  };

  const removeTimer = (id: number) => {
    setTimers(timers.filter(timer => timer.id !== id));
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    const { value } = e.target;
    setName(value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    setTimers([
      ...timers,
      {
        id: dayjs().valueOf(),
        title: title || `From ${dayjs().format('HH:mm')}`,
        value: 0,
        status: 'active',
        started: dayjs().valueOf(),
      },
    ]);
    setName('');
  };

  return (
    <div className="bg-primary-text-light mt-15 flex w-[770px] flex-col items-center gap-7.5 rounded-xl py-10">
      <form className="flex gap-5" onSubmit={handleSubmit}>
        <input
          className="border-border-dark bg-primary-bg focus:border-border-focus h-12.5 w-[305px] rounded-md border pl-[19px] text-[1.0625rem]/[1em] outline-none"
          type="text"
          placeholder="Timer Name"
          autoComplete="off"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <button className="button button_gradient min-w-[165px]" type="submit">
          Create Timer
        </button>
      </form>
      <span className="bg-border-dark h-px w-full"></span>
      <ul className="flex flex-col gap-10">
        {timers.map(timer => (
          <Timer key={timer.id} controls={{ updateTimer, removeTimer }} {...timer} />
        ))}
      </ul>
    </div>
  );
};

export default TimersControl;
