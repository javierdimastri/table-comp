import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AntdTableLayout from './components/layout/AntdTableLayout/AntdTableLayout';
import MaterialTableLayout from './components/layout/MaterialTableLayout/MaterialTableLayout';
import HomePageLayout from './components/layout/HomePageLayout/HomePageLayout';
import UserFormLayout from 'components/layout/UserFormLayout/UserFormLayout';

const App: React.FC = () => {
  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <HomePageLayout />
  //   },
  //   {
  //     path: '/table-antd',
  //     element: <AntdTableLayout />
  //   },
  //   {
  //     path: '/table-mui',
  //     element: <MaterialTableLayout />
  //   }
  // ]);

  return (
    <div className="app">
      {/* <RouterProvider key={'1'} router={router} /> */}
      <Router>
      <Routes>
        <Route path="/" element={<HomePageLayout />} />
        <Route path="/table-antd" element={<AntdTableLayout />} />
        <Route path="/table-mui" element={<MaterialTableLayout />} />
        <Route path="/table-mui" element={<MaterialTableLayout />} />
        <Route path="/user-form" element={<UserFormLayout />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
