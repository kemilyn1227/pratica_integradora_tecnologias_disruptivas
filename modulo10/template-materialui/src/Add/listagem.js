import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) => `${params.row ? params.row.firstName || '' : ''} ${params.row ? params.row.lastName || '' : ''}`,

  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'kemilyn', age: 22 },
  { id: 2, lastName: 'Lannister', firstName: 'joão', age: 21 },
  { id: 3, lastName: 'Lannister', firstName: 'tãnia', age: 49 },
  { id: 4, lastName: 'Stark', firstName: 'mateus', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'murilo', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'rafaela', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'luis', age: 28 },
  { id: 9, lastName: 'Roxie', firstName: 'nina', age: 2 },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
