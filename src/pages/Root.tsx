import { Outlet } from 'react-router-dom';
import { Layout } from '../styles/Layout';

function Root() {
  return (
    // 레이아웃 적용 테스트
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default Root;
