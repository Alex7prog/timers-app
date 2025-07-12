import type { FC } from 'react';
import Layout from '@layout/index';
import HeadLine from '@features/HeadLine';
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
