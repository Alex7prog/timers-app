import type { FC } from 'react';
import TimersControl from '@features/Timers/components/TimersControl';

const Timers: FC = () => {
  return (
    <section className="flex min-h-[841px] flex-col items-center gap-4.5 p-[122px_113px_113px]">
      <h2 className="text-primary-text-dark text-[2.1875rem] font-light tracking-[1px]">
        <span className="font-normal">Why</span> do we use it?
      </h2>
      <p className="text-secondary-text max-w-[570px] text-center text-[1rem]/7.5">
        This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red
        Queen. To her surprise, she lost sight of her in a moment.
      </p>
      <TimersControl />
    </section>
  );
};

export default Timers;
