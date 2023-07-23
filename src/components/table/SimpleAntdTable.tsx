import React from 'react';
import {
    Col, Row, Table
} from 'antd';
import moment from "moment";
import {DATE_MONTH_YEAR_FORMAT} from "../../constants/constants";
import { ColumnsType } from 'antd/lib/table';

const SimpleAntdTable = () => {
    const renderData = (rowData) => {
        return (rowData || '-');
    };

    const renderDate = (rowData) => {
        return rowData && rowData !== '-' ? moment(rowData).format(DATE_MONTH_YEAR_FORMAT) : '-';
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
        },
    ];

    const columns : ColumnsType<ColumnDataType> = [
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

    const renderPageTitle = (text) => {
        return (
            <Row justify='space-between'>
                <div>
                    {text}
                </div>
            </Row>
        );
    };

    return(
        <>
            <Row className={'page-title'} justify='space-between'>
                <Col span={12}>
                    {renderPageTitle('Simple Antd Table')}
                </Col>
                <Col span={12}>

                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Table
                        className={'clickable-row table-purple-header'}
                        dataSource={dataSource}
                        rowKey={'_id'}
                        columns={columns}
                    />
                </Col>
            </Row>
        </>
    )
}

export default SimpleAntdTable;

interface ColumnDataType { key: string; name: string; age: number; address: string; joinDate: Date; }
