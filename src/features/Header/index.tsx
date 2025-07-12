import type { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="text-primary-text-light absolute top-[25px] z-10 flex min-h-10 w-[1440px] items-center justify-between px-[135px]">
      <span className="cursor-pointer text-xl/[1.4375rem] font-semibold tracking-[0.5px]">
        AppStarter
      </span>
      <nav className="flex items-center gap-[30px]">
        <ul className="ml-auto flex gap-8">
          <li>
            <a href="#" className="header__link">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="header__link">
              Video Tour
            </a>
          </li>
          <li>
            <a href="#" className="header__link">
              Reviews
            </a>
          </li>
          <li>
            <a href="#" className="header__link">
              Pricing
            </a>
          </li>
        </ul>
      </nav>
      <button className="button h-10 min-w-[132px] text-sm uppercase">Get it Free</button>
    </header>
  );
};

export default Header;
