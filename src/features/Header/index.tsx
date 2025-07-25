import { navLinks } from './config';
import type { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="text-primary-text-light absolute top-[25px] z-10 flex min-h-10 w-[1440px] items-center justify-between px-[135px]">
      <span className="cursor-pointer text-xl/[1em] font-extrabold">Timers App</span>
      <nav className="flex items-center gap-[30px]">
        <ul className="ml-auto flex gap-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href="#" className="text-[0.9375rem] hover:underline">
                {link}
              </a>
            </li>
          ))}
        </ul>
        <button className="button h-10 min-w-[132px] text-sm uppercase">Get it Free</button>
      </nav>
    </header>
  );
};

export default Header;
