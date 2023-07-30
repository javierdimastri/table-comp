import React, { useState } from 'react';
import { Card, Col, Input, Row } from 'antd';
import { BsSearch } from 'react-icons/bs';
import SimpleAntdTable from '../../table/SimpleAntdTable';
import './AntdTableLayout.css';
import { dataTable } from '../../constants/constant';
import { isEmpty } from 'lodash';

const AntdTableLayout: React.FC = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [data, setData] = useState(dataTable);

  const handleFindData = (typedWord: string): void => {
    const filteredData = dataTable.filter(
      (item) =>
        item.name.toLowerCase().includes(typedWord.toLowerCase()) ||
              item.address.toLowerCase().startsWith(typedWord.toLowerCase())
    );
    setData(filteredData);
  };

  const handleSearchChange = (value: string | React.ChangeEvent<HTMLInputElement>): void => {
    if (typeof value === 'string') {
      setSearchKeyword(value);
      if (value === '') {
        setData(dataTable);
      } else {
        handleFindData(value);
      }
    } else {
      const searchedValue = value.target.value;
      setSearchKeyword(searchedValue);
      handleFindData(searchedValue);
    }
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Backspace') {
      handleSearchChange(event.currentTarget.value);
    }
  };

  const handleFilter = (value: Record<string, any>): void => {
    const selectedYears: string[] | null = value.joinDate;
    if (selectedYears && !isEmpty(selectedYears)) {
      const filteredData = dataTable.filter(item => {
        const joinYear = item.joinDate.getFullYear().toString();
        return selectedYears.includes(joinYear);
      });
      setData(filteredData);
    }
    if (!selectedYears) {
      setData(dataTable);
    }
  };

  const renderSearched = (): string => {
    return data.length ? `${data.length} Data Found` : '';
  };

  const renderPageTitle = (text: string): JSX.Element => {
    return (
            <Row className={'page-title'} justify='space-between'>
                <div>
                    {text}
                </div>
            </Row>
    );
  };

  return <Card className='antd-table-card'>
      <Row justify='space-between'>
          <Col span={12}>
              {renderPageTitle('Simple Antd Table')}
          </Col>
          <Col span={12}>
          </Col>
      </Row>
      <Row className='top-section' justify='space-between'>
          <Col span={12}></Col>
          <Col className='search-count' span={6}>
            <span>
               {renderSearched()}
            </span>
          </Col>
          <Col span={6}>
              <Input
                  className='search-input'
                  placeholder='Search Name and Address'
                  prefix={<BsSearch/>}
                  onChange={handleSearchChange}
                  onKeyUp={(event) => {
                    if (event.key === 'Backspace') { handleKeyUp(event); }
                  }}
                  value={searchKeyword}
              />
          </Col>
      </Row>
      <Row>
          <Col span={24}>
              <SimpleAntdTable dataSource={data} onFilterTable={handleFilter}/>
          </Col>
      </Row>
    </Card>;
};

export default AntdTableLayout;
