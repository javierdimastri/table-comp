import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AntdTableLayout from './components/layout/AntdTableLayout/AntdTableLayout';
import MaterialTableLayout from './components/layout/MaterialTableLayout/MaterialTableLayout';

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <> Welcome </>
    },
    {
      path: '/table-antd',
      element: <AntdTableLayout />
    },
    {
      path: '/table-mui',
      element: <MaterialTableLayout />
    }
  ]);

  return (
    <div className="app">
      <RouterProvider key={'1'} router={router} />
    </div>
  );
};

export default App;
