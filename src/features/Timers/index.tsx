import TimersControl from '@features/Timers/components/TimersControl';
import type { FC } from 'react';

const Timers: FC = () => {
  return (
    <section className="flex min-h-[840px] flex-col items-center py-[120px_112px]">
      <h2 className="text-primary-text-dark h-[50px] pt-0.25 text-[2.1875rem]/[3.125rem] font-light tracking-[1px]">
        <span className="font-extrabold">Why</span> do we use it?
      </h2>
      <p className="text-secondary-text mt-[17px] max-w-[570px] text-center text-[1rem]/7.5">
        This sounded nonsense to Alice, so she said nothing, but set off at once toward the Red
        Queen. To her surprise, she lost sight of her in a moment.
      </p>
      <TimersControl />
    </section>
  );
};

export default Timers;
