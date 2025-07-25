import Header from '@features/Header';
import Footer from '@features/Footer';
import type { FC } from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-primary-bg relative mx-auto flex min-h-screen w-[1440px] flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
