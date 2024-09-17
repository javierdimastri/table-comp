import { TableOutlined } from '@ant-design/icons';
import { TableChartOutlined } from '@mui/icons-material';
import Calculate from '@mui/icons-material/Calculate';
import CreateIcon from '@mui/icons-material/Create';
import { Button, Grid, Typography } from '@mui/material';
import { Button as AntdButton } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePageLayout.css';

const HomePageLayout: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Grid container justifyContent="center" alignItems="center" className="home-page-container">
      <Grid item xs={12} md={6} sx={{ paddingLeft: '5%' }}>
        <div className="home-card">
          <Typography variant="h4" gutterBottom>
            Welcome to My Example Website
          </Typography>
          <Typography variant="body1" paragraph>
            Explore a few features and content. Start your journey today!
          </Typography>
          {/* <Button variant="contained" color="primary" component={Link} to="/table-antd"> */}
          {/*  Get Started */}
          {/* </Button> */}
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="component-list">
          <Typography variant="h5" gutterBottom>
            My Component List
          </Typography>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Button color="primary" component={Link} to="/table-mui">
              <TableChartOutlined /> Material-UI Table
            </Button>
            <AntdButton
              type="link"
              className="ant-table-home-button"
              icon={<TableOutlined />}
              onClick={() => { navigate('/table-antd'); }}
            >
              Table Antd
            </AntdButton>
            <Button color="primary" component={Link} to="/user-form">
              <CreateIcon /> Create Form with Material-UI
            </Button>
            <Button color='secondary' component={Link} to="/crc32">
            <Calculate /> CRC32 Calculator
            </Button>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default HomePageLayout;
