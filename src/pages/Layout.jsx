import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <div className="w-full bg-white">
      <Header />
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
