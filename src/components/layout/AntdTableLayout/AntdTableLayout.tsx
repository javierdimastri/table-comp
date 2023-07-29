import React from 'react';
import { Card, Col, Row } from 'antd';
import SimpleAntdTable from '../../table/SimpleAntdTable';
import './AntdTableLayout.css';

const AntdTableLayout: React.FC = () => {
  const renderPageTitle = (text: string): JSX.Element => {
    return (
            <Row justify='space-between'>
                <div>
                    {text}
                </div>
            </Row>
    );
  };

  return <Card className='antd-table-card'>
      <Row className={'page-title'} justify='space-between'>
          <Col span={12}>
              {renderPageTitle('Simple Antd Table')}
          </Col>
          <Col span={12}>

          </Col>
      </Row>
      <Row>
          <Col span={24}>
              <SimpleAntdTable />
          </Col>
      </Row>
    </Card>;
};

export default AntdTableLayout;
