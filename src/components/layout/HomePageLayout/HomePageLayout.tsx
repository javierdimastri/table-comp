import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Typography, Grid } from '@mui/material';
import { TableChartOutlined } from '@mui/icons-material';
import { TableOutlined } from '@ant-design/icons';
import { Button as AntdButton } from 'antd';
// import './HomePageLayout.css'; // Sesuaikan dengan nama file CSS Anda

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
              icon={<TableOutlined />}
              style={{ marginRight: '8px', fontSize: 'large', paddingLeft: '1.3%' }}
              onClick={() => { navigate('/table-antd'); }}
            >
              Table Antd
            </AntdButton>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default HomePageLayout;
