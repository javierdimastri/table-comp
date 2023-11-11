import React, { useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
  Grid, TextField, InputAdornment, Card, CardHeader,
  IconButton
} from '@mui/material';
import { dataTable } from '../../constants/constant';
import moment from 'moment/moment';
import { DATE_MONTH_YEAR_FORMAT } from '../../../constants/constants';
import { BsSearch } from 'react-icons/bs';
import { HomeOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const MaterialTableLayout: React.FC = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [data, setData] = useState(dataTable);
  const navigate = useNavigate();

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#501D43',
      color: 'white'
    }
  }));

  const renderData = (rowData: string | Date): string => {
    if (rowData instanceof Date) {
      return renderDate(rowData);
    }
    return rowData === '' ? '-' : rowData;
  };

  const renderDate = (rowData: Date): string => {
    return moment(rowData).format(DATE_MONTH_YEAR_FORMAT);
  };

  const columns: readonly ColumnDataType[] = [
    {
      label: 'Id',
      align: 'center',
      key: 'key',
      format: renderData
    },
    {
      label: 'Name',
      align: 'left',
      key: 'name',
      format: renderData
    },
    {
      label: 'Age',
      align: 'left',
      key: 'age',
      format: renderData
    },
    {
      label: 'Address',
      align: 'left',
      key: 'address',
      format: renderData
    },
    {
      label: 'Join Date',
      align: 'center',
      key: 'joinDate',
      format: renderData
    }
  ];

  const handleFindData = (typedWord: string): void => {
    console.log({ typedWord });
    const filteredData = dataTable.filter(
      (item) =>
        item.name.toLowerCase().includes(typedWord.toLowerCase()) ||
        item.address.toLowerCase().startsWith(typedWord.toLowerCase())
    );
    setData(filteredData);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSearchChange = (value: string | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
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

  // const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement | HTMLDivElement | any>): void => {
  //   if (event.key === 'Backspace') {
  //     handleSearchChange(event.currentTarget.value);
  //   }
  // };

  const renderPageTitle = (text: string): JSX.Element => {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <IconButton onClick={() => { navigate('/'); }}>
          <HomeOutlined />
        </IconButton>
        <CardHeader
          title={text}
          className='title'
        />
      </div>
    );
  };

  return (
  <Paper elevation={3} sx={{ width: '100%', height: '100%', overflow: 'hiden' }}>
    <Card sx={{ padding: 3 }} variant="outlined">
      <Grid container justifyContent='space-between'>
        <Grid item xs={12} md={6}>
          {renderPageTitle('Simple Material-UI Table')}
        </Grid>
        <Grid item xs={12} md={6} />
      </Grid>
      <Grid container className='top-section' justifyContent='space-between'>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={3} className='search-count'>
          <span>{'11 Data Found'}</span>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            sx={{
              '& .MuiInputBase-root': {
                border: 'none',
                borderBottom: '2px solid #d9d9d9'
              },
              '& .MuiInputBase-input': {
                padding: '6px 0'
              }
            }}
            placeholder='Search Name and Address'
            value={searchKeyword}
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position='start'>
                  <BsSearch />
                </InputAdornment>
              )
            }}
            onChange={handleSearchChange}
          />
        </Grid>
      </Grid>
      <Grid container justifyContent='space-betweem'>
        <Grid item xs={12}>
          <TableContainer sx={{ borderRadius: 2, padding: 0 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {
                    columns.map((item) => {
                      return <StyledTableCell
                          key={item.key}
                          align={item.align}
                      >
                        {item.label}
                      </StyledTableCell>;
                    })
                  }
                </TableRow>
              </TableHead>
              <TableBody >
                {
                  data.map((row) => {
                    return <TableRow hover key={row.key}>
                      {
                        columns.map((column) => {
                          const value = row[column.key];
                          return (
                              <TableCell key={column.key} align={column.align}>
                                {typeof value === 'number' ? value : column.format(value)}
                              </TableCell>
                          );
                        })
                      }
                    </TableRow>;
                  })
                }
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Card>
  </Paper>);
};

export default MaterialTableLayout;

interface ColumnDataType {
  key: 'name' | 'key' | 'age' | 'address' | 'joinDate'
  label: string
  align?: 'right' | 'center' | 'left'
  format: (value: string | Date) => string
}
