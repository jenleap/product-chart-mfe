import React from 'react';
import './TableContainer.css';
import Paper from '@mui/material/Paper';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';

type TableContainerProps = {
  columns: any[];
  rows: any[];
};

function TableContainer(props: TableContainerProps) {
  return (
    <Paper>
      <Grid
        rows={props.rows}
        columns={props.columns}
      >
        <Table />
        <TableHeaderRow />
      </Grid>
    </Paper>
  );
}

export default TableContainer;