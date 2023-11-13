import React from 'react';
import { Table } from 'antd';
import moment from 'moment';
import { DATE_MONTH_YEAR_FORMAT } from '../../constants/constants';
import { ColumnsType, TablePaginationConfig } from 'antd/lib/table';
import { isEmpty } from 'lodash';
import '../layout/AntdTableLayout/AntdTableLayout.css';
import { FilterValue } from 'antd/lib/table/interface';

const SimpleAntdTable: React.FC<TableProps> = ({ dataSource, onFilterTable }) => {
  const renderData = (rowData: string): string => {
    return rowData === '' ? '-' : rowData;
  };

  const renderDate = (rowData: string): string => {
    return rowData !== '' ? moment(rowData).format(DATE_MONTH_YEAR_FORMAT) : '-';
  };

  const filterYearOptions = (): Array<{ text: string, value: string }> => {
    const dataYear = new Set(dataSource.map((item) => item.joinDate.getFullYear().toString()));
    return !isEmpty(dataYear) ? Array.from(dataYear).sort().map((item) => ({ text: item, value: item })) : [];
  };

  const columns: ColumnsType<ColumnDataType> = [
    {
      title: 'Id',
      align: 'center',
      dataIndex: 'key',
      key: 'key',
      render: (id) => renderData(id)
    },
    {
      title: 'Name',
      align: 'left',
      dataIndex: 'name',
      key: 'name',
      render: (name) => renderData(name)
    },
    {
      title: 'Age',
      align: 'left',
      dataIndex: 'age',
      key: 'age',
      width: 150,
      render: (age) => renderData(age)
    },
    {
      title: 'Address',
      align: 'left',
      dataIndex: 'address',
      key: 'address',
      render: (address) => renderData(address)
    },
    {
      title: 'Join Date',
      align: 'center',
      dataIndex: 'joinDate',
      key: 'joinDate',
      filters: filterYearOptions(),
      render: (date) => renderDate(date)
    }
  ];

  const handleChange = (pagination: TablePaginationConfig, filters: Record<string, FilterValue | null>, sorter: any): void => {
    onFilterTable(filters);
  };

  return (<Table
    className={'clickable-row table-orange-header'}
    dataSource={dataSource}
    rowKey={'key'}
    columns={columns}
    onChange={handleChange}
    />
  );
};

export default SimpleAntdTable;

interface ColumnDataType {
  key: string
  name: string
  age: number
  address: string
  joinDate: Date
  onFilter?: (value: string | number | boolean, record: ColumnDataType) => boolean
}

interface TableProps {
  dataSource: ColumnDataType[]
  onFilterTable: (value: any) => void
}
