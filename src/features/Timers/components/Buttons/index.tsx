import type { FC } from 'react';

type TimerButtonProps = {
  handler: () => void;
};

export const RunButton: FC<TimerButtonProps> = ({ handler }) => (
  <button
    className="button__timer ml-[42px] bg-linear-[135deg,#009fc5,#3cecb0] pl-1"
    onClick={handler}
  >
    <img className="h-[15px] w-[11px]" src="/images/timers/run.svg" alt="run" />
  </button>
);

export const PauseButton: FC<TimerButtonProps> = ({ handler }) => (
  <button className="button__timer ml-[42px] bg-linear-[135deg,#7956ec,#2fb9f8]" onClick={handler}>
    <img className="h-[15px] w-[14px] pl-0.25" src="/images/timers/pause.svg" alt="pause" />
  </button>
);

export const RemoveButton: FC<TimerButtonProps> = ({ handler }) => (
  <button
    className="button__timer ml-[20px] rounded-md bg-linear-[135deg,#f23673,#fca069]"
    onClick={handler}
  >
    <img className="h-[22px] w-[15.5px] pl-0.25" src="/images/timers/delete.svg" alt="delete" />
  </button>
);
