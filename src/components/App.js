import { Layout } from './Layout/Layout';
import { Controls } from './Controls';
import { Balance } from './Balance';

export const App = () => {
  return (
    <Layout>
      <Balance />
      <Controls />
    </Layout>
  );
};
