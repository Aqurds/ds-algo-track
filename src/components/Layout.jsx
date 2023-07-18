import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import TodosLogic from '@/components/TodosLogic';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default Layout;
