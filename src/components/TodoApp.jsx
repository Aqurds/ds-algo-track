import { Routes, Route } from 'react-router-dom';

import Home from '@/pages/Home';
import About from '@/pages/About';
import Login from '@/pages/Login';
import Profile from '@/pages/Profile';
import ErrorPage from "@/pages/Error";
import Layout from '@/components/Layout';

const TodoApp = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
export default TodoApp;
