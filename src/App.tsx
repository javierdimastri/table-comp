import CRC32CalculatorForm from 'components/layout/CRC32CalculatorForm/CRC32CalculatorForm';
import UserFormLayout from 'components/layout/UserFormLayout/UserFormLayout';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AntdTableLayout from './components/layout/AntdTableLayout/AntdTableLayout';
import HomePageLayout from './components/layout/HomePageLayout/HomePageLayout';
import MaterialTableLayout from './components/layout/MaterialTableLayout/MaterialTableLayout';

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
        <Route path="/crc32" element={<CRC32CalculatorForm />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
