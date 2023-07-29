import React from 'react';
import './App.css';
import { Layout } from 'antd';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AntdTableLayout from './components/layout/AntdTableLayout/AntdTableLayout';

const { Content } = Layout;
const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <> Welcome </>
    },
    {
      path: '/table-antd',
      element: <AntdTableLayout />
    }
  ]);

  return (
    <div className="app">
        <Content className='main-content'>
            <div>
                <RouterProvider key={'1'} router={router} />
            </div>
        </Content>
    </div>
  );
};

export default App;
