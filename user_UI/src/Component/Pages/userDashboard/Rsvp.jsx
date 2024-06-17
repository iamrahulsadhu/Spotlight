import * as React from 'react';
import {useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {TableVirtuoso} from 'react-virtuoso';
import {useParams} from 'react-router-dom';
import axios from 'axios';
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
  let response;
  const [responseData, setResponse] = useState([])
  const [valid, setValid] = useState(false)
  const [dataId,setId] = useState("")
  const [mail,setEmail] = useState("")
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/userevents/${id}`);
        response=res.data.data.myevents;
        console.log(res.data.data.myevents);  // log the fetched data instead of the state
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData().then(()=>{
      if(response)
        {
          console.log(response);
          setResponse(response)
          setValid(true)
        }

    }).catch((err)=>{
      console.log(err.message);
    });
  }, []);

  const [open, setOpen] = React.useState(false); // State for modal visibility

  const handleInviteClick = (id) => {
    setId(id);
    setOpen(true); // Open the modal upon clicking the "Invite" button
  };

  const handleChange=(e)=>{
    setEmail(e.target.value);
  }
  const handleClose = () => {
    setId("");
    setOpen(false); // Close the modal
  };
const sendInvitation=async()=>{
  try {
    const res = await axios.post(`http://localhost:4000/invite/${dataId}`,{mail});
    setOpen(false); // Close the modal
    // log the fetched data instead of the state
  } catch (err) {
    console.log(err.message);
  }
}
  return (
    <>
    <table border="1"  className="col-8" style={{ height: 400, width: 600, margin: '0 auto' }}>
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {valid && responseData.map((data) => (
          <tr key={data.id}>
              <td>{data.name}</td>
            <td align="center">
              <Button variant="contained" color="primary" onClick={()=>{handleInviteClick(data._id)}}>
                Invite
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    //   {/* Modal */}
    <Paper className='col-8'  style={{ height: 400, width: 600, margin: '0 auto' }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Paper style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: 32 }}>
          <h2 id="modal-title">Invite Modal</h2>
          Name <input type='text' placeholder='Name' id='name' style={{ borderRadius: '10px', border: '0.5px solid black', marginBottom: '10px', color: 'black' }} />
          Email <input type='email' placeholder='Email' id='email' value={mail} onChange={handleChange}style={{ borderRadius: '10px', border: '0.5px solid black', marginBottom: '10px', color: 'black' }} />
          <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
          <Button onClick={sendInvitation}>Send</Button>
          <Button onClick={handleClose}>Close</Button>
          </div>
         
        </Paper>
      </Modal>
    </Paper>
    </>
  );
}
