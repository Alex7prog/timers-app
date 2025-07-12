import type { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="border-t-border-dark flex min-h-[110px] items-center justify-between border-t bg-white px-[135px]">
      <span className="text-primary-text-dark text-xl font-extrabold">AppStarter</span>
      <div className="flex min-w-[186px] flex-col items-center gap-2.5">
        <span className="text-secondary-text-light text-[0.6875rem]">
          {`Created with `}
          <img className="inline" src="/images/footer/heart.svg" alt="heart" />
          {' to '}
          <b className="text-primary-text-dark">Gromcode</b>
          {' by Oleksandr Siedmoi'}
        </span>
        <span className="text-secondary-text-light text-[0.6875rem]">© AppStarter, 2025</span>
      </div>

      <ul className="border-border-dark flex overflow-hidden rounded-md border-[0.5px]">
        <li>
          <a className="footer__social-ref" href="#">
            <img src="/images/footer/twitter.svg" alt="" />
          </a>
        </li>
        <li>
          <a className="footer__social-ref" href="#">
            <img src="/images/footer/facebook.svg" alt="" />
          </a>
        </li>
        <li>
          <a className="footer__social-ref" href="#">
            <img src="/images/footer/instagram.svg" alt="" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
