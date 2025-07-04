import type { FC } from 'react';
import Layout from '@layout/Layout';
import HeadLine from '@features/HeadLine/HeadLine';
import Timers from '@features/Timers';

const App: FC = () => {
  return (
    <Layout>
      <HeadLine />
      <Timers />
    </Layout>
  );
};

export default App;
