import React from 'react';
import { Table } from 'antd';
import moment from 'moment';
import { DATE_MONTH_YEAR_FORMAT } from '../../constants/constants';
import { type ColumnsType } from 'antd/lib/table';

const SimpleAntdTable: React.FC = () => {
  const renderData = (rowData: string): string => {
    return rowData === '' ? '-' : rowData;
  };

  const renderDate = (rowData: string): string => {
    return rowData !== '' ? moment(rowData).format(DATE_MONTH_YEAR_FORMAT) : '-';
  };

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
      joinDate: new Date()
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
      joinDate: new Date(new Date().setDate(new Date().getDate() + 1))
    }
  ];

  const columns: ColumnsType<ColumnDataType> = [
    {
      title: 'Name',
      align: 'left',
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
      width: 250,
      render: (name) => renderData(name)
    },
    {
      title: 'Age',
      align: 'left',
      dataIndex: 'age',
      key: 'age',
      width: 150,
      render: (name) => renderData(name)
    },
    {
      title: 'Address',
      align: 'left',
      dataIndex: 'address',
      key: 'address',
      render: (docType) => renderData(docType)
    },
    {
      title: 'Join Date',
      align: 'left',
      dataIndex: 'joinDate',
      key: 'joinDate',
      render: (date) => renderDate(date)
    }
  ];

  return (
      <Table
    className={'clickable-row table-purple-header'}
    dataSource={dataSource}
    rowKey={'key'}
    columns={columns}
    />
  );
};

export default SimpleAntdTable;

interface ColumnDataType { key: string, name: string, age: number, address: string, joinDate: Date }
