import type { FC } from 'react';

const HeadLine: FC = () => {
  return (
    <section className="relative min-h-[848px] bg-[url('/images/headline/background.png')] bg-no-repeat p-[230px_135px_180px]">
      <div className="max-w-[555px]">
        <img src="/images/headline/logo.svg" alt="logo" />
        <h2 className="text-primary-text-light my-[10px_37px] text-[2.1875rem]/[3.125rem] font-light tracking-[1px]">
          <span className="font-bold">AppStarter.</span> Best landing page for web and mobile apps
        </h2>
        <div className="flex gap-5">
          <button className="button button_gradient">Download Now</button>
          <button className="button bg-primary-bg text-primary-text-dark min-w-[144px] font-semibold">
            Watch Video
          </button>
        </div>
      </div>
      <img
        src="/images/headline/decoration.png"
        alt="decoration"
        className="absolute top-[137px] right-[179px] bg-no-repeat"
      />
    </section>
  );
};

export default HeadLine;
