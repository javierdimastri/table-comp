import React from "react";
import './App.css';
import {Layout} from "antd";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import SimpleAntdTable from "./components/table/SimpleAntdTable";

const { Content } = Layout;
function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <> Welcome </>,
        },
        {
            path: "/table-antd",
            element: <SimpleAntdTable />,
        },
    ]);

  return (
    <div className="app">
        <Content className='main-content'>
            <RouterProvider router={router} />
        </Content>
    </div>
  );
}

export default App;
