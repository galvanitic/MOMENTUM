import * as React from 'react';
import Image from 'next/dist/client/image';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { DataGrid, GridRowsProp, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';
import { display } from '@mui/system';
export interface IWhatAThingProps {
  
}

const columns: GridColDef[] = [
  { field: 'date', headerName: 'Date', width: 100 },
  { field: 'avatar', headerName: 'User', width: 150, renderCell: (params: GridRenderCellParams<Array<string>>)=> <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-around', alignItems: 'center'}}><Avatar alt={params.value[0]} src={params.value[1]} /> {params.value[0]} </div>},
  { field: 'message', headerName: 'Message', width: 250 },
  { field: 'options', headerName: '', width: 25, renderCell: (params: GridRenderCellParams<any>)=> <MoreHorizIcon />},
];
const rows: GridRowsProp = [
  { id: 1, 
    date: '12.19.2021', 
    avatar: ["Bradley", "/profile"],
    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, labore cupiditate debitis esse qui explicabo officia culpa sed, dolorum possimus, temporibus doloremque sunt officiis. Et velit voluptatibus labore eligendi quis?", 
    options: ""
  },
  { id: 2, 
    date: '12.19.2021', 
    avatar: ["Rodolfo", "/profile"],
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dicta repudiandae velit, suscipit eos minima iure omnis quas, ipsam officia tempore earum recusandae. Deleniti quos delectus ipsum eaque at nulla?", 
    options: ""
  },
  { id: 3, 
    date: '12.19.2021', 
    avatar: ["Hudson", "/profile"],
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure aspernatur officia sequi totam nostrum, cum aliquid beatae praesentium fugiat deserunt amet aperiam quam quod ex fugit magnam et debitis neque.", 
    options: ""
  },
  { id: 4, 
    date: '12.19.2021', 
    avatar: ["Sarah", "/profile"],
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi totam libero, asperiores doloribus pariatur a similique, officia distinctio natus eveniet illo vero sed eligendi hic? Sapiente ratione facere molestias beatae!", 
    options: ""
  },
  { id: 5, 
    date: '12.19.2021', 
    avatar: ["Leigh", "/profile"],
    message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet doloremque inventore explicabo itaque, nam eligendi voluptatibus accusantium labore culpa similique quae. Necessitatibus veniam quaerat animi aspernatur, ipsam totam corrupti. Distinctio!", 
    options: ""
  },
  { id: 6, 
    date: '12.19.2021', 
    avatar: ["Bad Bunny", "/profile"],
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nam alias aperiam error molestias modi numquam reiciendis eum commodi itaque, hic suscipit id libero totam nulla minima laudantium in! Odit?", 
    options: ""
  },
  { id: 7, 
    date: '12.19.2021', 
    avatar: ["Beyoncé Knowles", "/profile"],
    message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi possimus sapiente vero libero sint nisi dicta totam quod ea adipisci. Quod optio suscipit voluptatum, amet nostrum corrupti? Eum, vitae tempore.", 
    options: ""
  },
];

export default function CommunityBoard (props: IWhatAThingProps) {
  const [pageSize, setPageSize] = React.useState<number>(4);

  return (
    <div className="cb_content">
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid 
          rows={rows} 
          columns={columns} 
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[4, 8, 16]}
          pagination
          />
        </div>
      </div>
    </div>
  );
}
