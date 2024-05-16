import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal'; // Import Modal component
import { TableVirtuoso } from 'react-virtuoso';

const sample = [
  ['Frozen yoghurt', 159, 6.0, 24, 4.0],
  ['Ice cream sandwich', 237, 9.0, 37, 4.3],
  ['Eclair', 262, 16.0, 24, 6.0],
  ['Cupcake', 305, 3.7, 67, 4.3],
  ['Gingerbread', 356, 16.0, 49, 3.9],
];

function createData(id, dessert, calories, fat, carbs, protein) {
  return { id, dessert, calories, fat, carbs, protein };
}

const columns = [
  {
    width: 200,
    label: 'Dessert',
    dataKey: 'dessert',
  },
  {
    width: 120,
    label: 'Calories\u00A0(g)',
    dataKey: 'calories',
    numeric: true,
  },
  {
    width: 120,
    label: 'Fat\u00A0(g)',
    dataKey: 'fat',
    numeric: true,
  },
  {
    width: 120,
    label: 'Carbs\u00A0(g)',
    dataKey: 'carbs',
    numeric: true,
  },
  {
    width: 120,
    label: 'Protein\u00A0(g)',
    dataKey: 'protein',
    numeric: true,
  },
];

const rows = Array.from({ length: 200 }, (_, index) => {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  return createData(index, ...randomSelection);
});

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? 'right' : 'left'}
          style={{ width: column.width }}
          sx={{
            backgroundColor: 'background.paper',
          }}
        >
          {column.label}
        </TableCell>
      ))}
      <TableCell key="invite" variant="head" align="center">
        Invite
      </TableCell>
    </TableRow>
  );
}

export default function ReactVirtualizedTable() {
  const [open, setOpen] = React.useState(false); // State for modal visibility

  const handleInviteClick = () => {
    setOpen(true); // Open the modal upon clicking the "Invite" button
  };

  const handleClose = () => {
    setOpen(false); // Close the modal
  };

  return (
    <Paper style={{ height: 400, width: 600, margin: '0 auto' }}>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={(index, row) => (
          <React.Fragment>
            {columns.map((column) => (
              <TableCell
                key={column.dataKey}
                align={column.numeric || false ? 'right' : 'left'}
              >
                {row[column.dataKey]}
              </TableCell>
            ))}
            <TableCell align="center">
              <Button variant="contained" color="primary" onClick={handleInviteClick}>
                Invite
              </Button>
            </TableCell>
          </React.Fragment>
        )}
      />
      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Paper style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: 32 }}>
          <h2 id="modal-title">Invite Modal</h2>
          Name <input type='text' placeholder='Name' id='name' style={{ borderRadius: '10px', border: '0.5px solid black', marginBottom: '10px', color: 'black' }} />
          Email <input type='email' placeholder='Email' id='email'  style={{ borderRadius: '10px', border: '0.5px solid black', marginBottom: '10px', color: 'black' }} />
          <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
          <Button onClick={handleClose}>Send</Button>
          <Button onClick={handleClose}>Close</Button>
          </div>
         
        </Paper>
      </Modal>
    </Paper>
  );
}
