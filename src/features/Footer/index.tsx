import { socials } from './config';
import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="border-t-border-dark flex min-h-[110px] items-center border-t bg-white px-[135px]">
      <span className="text-primary-text-dark text-xl/[1.5625rem] font-extrabold">Timers App</span>
      <div className="ml-[382px] flex min-w-[186px] flex-col items-center gap-2.5">
        <div className="text-secondary-text-light text-[0.6875rem]/[0.9375rem]">
          {'Created with '}
          <img className="inline w-[13px]" src="/images/footer/heart.svg" alt="heart" />
          {' by '}
          <span className="secondary-text-light font-bold">Oleksandr Siedmoi</span>
        </div>
        <span className="text-secondary-text-light text-[0.6875rem]/[0.9375rem]">
          © Timers App, 2025
        </span>
      </div>
      <ul className="border-border-dark divide-border-dark mt-0.25 ml-auto flex divide-x overflow-hidden rounded-md border">
        {socials.map((img, index) => (
          <li key={index}>
            <a className="flex h-[38px] w-[38.2px] items-center justify-center" href="#">
              <img src={img.src} alt={img.title} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
