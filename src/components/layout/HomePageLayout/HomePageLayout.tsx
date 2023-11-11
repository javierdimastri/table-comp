import React from 'react';
import { Link } from 'react-router-dom';

const HomePageLayout: React.FC = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <nav>
        <ul>
          <li>
            <Link to="/table-antd">Table Ant Design</Link>
          </li>
          <li>
            <Link to="/table-mui">Table MUI</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePageLayout;
