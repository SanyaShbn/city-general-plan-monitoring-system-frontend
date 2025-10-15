import { DataGrid } from '@mui/x-data-grid';
import { ruRU } from '@mui/x-data-grid/locales';
import { Box } from '@mui/material';

export default function DataTable({ rows, columns, loading = false, pageSize = 10, onRowClick }) {
  return (
    <Box sx={{ height: 520, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        pageSize={pageSize}
        rowsPerPageOptions={[10, 25, 50]}
        onRowClick={onRowClick}
        disableSelectionOnClick
        localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
      />
    </Box>
  );
}
