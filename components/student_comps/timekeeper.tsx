import * as React from 'react';
import { useUser } from "../../lib/hooks";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Rating, { IconContainerProps } from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { createStyles, makeStyles, Theme, ThemeProvider, createTheme } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3A585D',
    },
  },
});

interface ITimeKeeperProps {
}
interface Column {
  id: 'id' | 'weekday' | 'timeSpent' | 'rating';
  label: string;
  minWidth?: number;
}
interface Data {
  id: number,
  weekday: string,
  timeSpent: number,
  rating: number,
}
const columns: readonly Column[] = [
  { id: 'weekday', label: 'Weekday', minWidth: 50 },
  { id: 'timeSpent', label: 'Time Spent', minWidth: 50 },
  { id: 'rating', label: 'Rating', minWidth: 100 },
];
function createData(
  id: number,
  weekday: string,
  timeSpent: number,
  rating: number,
): Data {
  return { id, weekday, timeSpent, rating};
}

const rows = [
  createData(1, "Sunday", 0, 3),
  createData(2, "Monday", 0, 3),
  createData(3, "Tuesday", 0, 3),
  createData(4, "Wednesday", 0, 3),
  createData(5, "Thursday", 0, 3),
  createData(6, "Friday", 0, 3),
  createData(7, "Saturday", 0, 3),
]

const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
  };
} = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};
function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}
const TimeKeeper: React.FunctionComponent<ITimeKeeperProps> = (props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(7);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div className="timekeeper" style={{ overflow: 'hidden', borderRadius: '15px', height: '100%'}}>
       <TableContainer sx={{ height: '90%' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth, fontFamily: 'Proxima Nova Bold', backgroundColor: "#3A585D", color:"#E4E3E1"}}
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
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value: string | string[] | Array<string> | undefined | number = row[column.id];
                      switch(column.id){
                        case 'weekday':
                          return (
                            <TableCell key={column.id} sx={{fontFamily: 'Proxima'}}>
                              {<div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'start', alignItems: 'center', fontFamily: 'Proxima'}}> {value} </div>}
                            </TableCell>
                          );
                        case 'timeSpent':
                          return (
                            <TableCell key={column.id} sx={{fontFamily: 'Proxima'}}>
                              <TextField id="outlined-basic" label="Hours" variant="outlined" defaultValue={value}/>
                            </TableCell>
                            );
                        case 'rating':
                          return(
                            <TableCell key={column.id} sx={{fontFamily: 'Proxima'}}>
                              <Rating
                                name="highlight-selected-only"
                                defaultValue={3}
                                IconContainerComponent={IconContainer}
                                highlightSelectedOnly
                              />
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
        rowsPerPageOptions={[7, 14, 28]}
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
};

export default TimeKeeper;
