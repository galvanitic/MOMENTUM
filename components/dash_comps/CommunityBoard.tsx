import * as React from 'react';
import Image from 'next/dist/client/image';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Avatar from '@mui/material/Avatar';
import { display } from '@mui/system';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { ReactComponentElement } from 'react-transition-group/node_modules/@types/react';
export interface IWhatAThingProps {
  
}
interface Column {
  id: 'date' | 'user' | 'message' | 'options';
  label: string;
  minWidth?: number;
}
interface Data {
  date: string;
  user: Array<string>;
  message: string;
  options?: Array<string>;
}
const columns: readonly Column[] = [
  { id: 'date', label: 'Date', minWidth: 120 },
  { id: 'user', label: 'User', minWidth: 150 },
  { id: 'message', label: 'Message', minWidth: 250 },
  { id: 'options', label: '', minWidth: 10 },
];
function createData(
  date: string,
  user: Array<string>,
  message: string,
  options?: Array<string>,
): Data {
  return { date, user, message, options };
}

const rows = [
  createData('12.19.2021', ["Rodolfo", "/profile"], "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sit sunt similique, rem consectetur eum repudiandae tenetur in iusto, dolore officia pariatur sequi deserunt illum? Corrupti, fugit! Repellendus, exercitationem saepe."),
  createData('11.1.2021', ["Bradley", "/profile"], "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sit sunt similique, rem consectetur eum repudiandae tenetur in iusto, dolore officia pariatur sequi deserunt illum? Corrupti, fugit! Repellendus, exercitationem saepe."),
  createData('8.9.2021', ["Hudson", "/profile"], "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sit sunt similique, rem consectetur eum repudiandae tenetur in iusto, dolore officia pariatur sequi deserunt illum? Corrupti, fugit! Repellendus, exercitationem saepe."),
  createData('8.19.2021', ["Sarah", "/profile"], "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sit sunt similique, rem consectetur eum repudiandae tenetur in iusto, dolore officia pariatur sequi deserunt illum? Corrupti, fugit! Repellendus, exercitationem saepe."),
  createData('2.15.2021', ["Leigh", "/profile"], "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sit sunt similique, rem consectetur eum repudiandae tenetur in iusto, dolore officia pariatur sequi deserunt illum? Corrupti, fugit! Repellendus, exercitationem saepe."),
  createData('1.18.2021', ["Chris", "/profile"], "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sit sunt similique, rem consectetur eum repudiandae tenetur in iusto, dolore officia pariatur sequi deserunt illum? Corrupti, fugit! Repellendus, exercitationem saepe."),
  createData('6.15.2021', ["Suarez", "/profile"], "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ut laborum perspiciatis ipsa nobis hic at doloribus dolor cupiditate, ratione nihil deleniti, ea, necessitatibus tempora et exercitationem a nemo nisi."),
];

export default function CommunityBoard (props: IWhatAThingProps) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div style={{ width: '100%', overflow: 'hidden', marginTop: "15px", borderRadius: '15px'}}>
      <TableContainer sx={{ height: 260 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth, fontFamily: 'Proxima'}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.date}>
                    {columns.map((column) => {
                      const value: string | string[] | Array<string> | undefined= row[column.id];
                      switch(column.id){
                        case 'user':
                          return (
                            <TableCell key={column.id}>
                              {<div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'start', alignItems: 'center', fontFamily: 'Proxima'}}><Avatar sx={{marginRight: "10px"}} alt={value ? value[0] : ""} src={value ? value[1] : ""} /> {value ? value[0] : ""} </div>}
                            </TableCell>
                          );
                        case 'message':
                          return (
                            <TableCell key={column.id} sx={{fontFamily: 'Proxima'}}>
                              {value?.slice(0,25)+"..."}
                            </TableCell>
                            );
                        case 'options':
                          return(
                            <TableCell >
                              <MoreHorizIcon />
                            </TableCell>
                          )
                        default:
                          return (
                            <TableCell key={column.id} sx={{fontFamily: 'Proxima'}}>
                              {value}
                            </TableCell>
                          );
                      }
                      
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{fontFamily: 'Proxima'}}
      />
    </div>
  );
}
