import { useState, type FC } from 'react';
import { useLocalStorage } from '@hooks/useLocalStorage';
import Form from '@features/Timers/components/Form';
import List from '../List';
import dayjs from '@utils/dayjs';
import { LOCAL_STORAGE_KEYS } from '@config/localstorage';
import type { Timer as TimerType } from '@entities/types';

const Control: FC = () => {
  const [timers, setTimers] = useLocalStorage<TimerType[]>(LOCAL_STORAGE_KEYS.TIMERS, []);
  const [title, setName] = useState('');

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

  return (
    <div className="bg-primary-text-light mt-15 flex w-[770px] flex-col items-center gap-7.5 rounded-xl py-10">
      <Form title={title} handleChange={handleChange} handleSubmit={handleSubmit} />
      <span className="bg-border-dark h-px w-full"></span>
      <List controls={{ updateTimer, removeTimer }} timers={timers} />
    </div>
  );
};

export default Control;
