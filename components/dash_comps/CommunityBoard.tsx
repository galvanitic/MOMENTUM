import * as React from 'react';
import Image from 'next/dist/client/image';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

export interface IWhatAThingProps {
}

const rows: GridRowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Date', width: 150 },
  { field: 'col2', headerName: 'User', width: 150 },
  { field: 'col3', headerName: '', width: 150 },
  { field: 'col4', headerName: 'Preview', width: 150 },
  { field: 'col5', headerName: '', width: 150 },
];
export default function CommunityBoard (props: IWhatAThingProps) {
  return (
    <div className="cb_content">
      
    </div>
  );
}
