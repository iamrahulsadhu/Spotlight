import React, { useState, useEffect } from 'react';  
import {Box, styled, TextField, Select, FormControl, InputLabel, MenuItem } from '@mui/material';
import {LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import {AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import {DatePicker} from '@mui/x-date-pickers/DatePicker'
import { DemoItem } from '@mui/x-date-pickers/internals/demo';



const FormContainer = styled(Box)`

  width: 400px;
  margin: 0 auto;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
    flex-direction: column;
`;

const FormHeader = styled(Box)`
font-size: 30px;
margin-left: 90px;
`;

const Insert = () => {

  const [cleared, setCleared] = React.useState(false);

  useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);

  const [formData, setFormData] = useState({
    name: '',
    date: '',
    timing: '',
    category: '',
    photo: '',
    details: ''
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === 'file') {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          [name]: reader.result
        });
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
        name: '',
        date: '',
        timing: '',
        photo: '',
        details: ''
    });
  };

  return (
    <div className=" container-fluid">
      <div className="row mt-2 dashboard-row ">
        <FormContainer>
          <FormHeader>Insert Event</FormHeader>
          <form onSubmit={handleSubmit}>

            <TextField
                variant='standard'
                label='Enter Event Name'
                type="text"
                id="name"
                name="name"
                placeholder='Event Name'
                value={formData.name}
                onChange={handleChange}
                required
              />


            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoItem value={formData.date} onChange={handleChange}>
                <DatePicker
                  label="Date" 
                  id="date"
                  name="date"
                  required
                  sx={{ width: 260 }}
                    slotProps={{
                      field: { clearable: true, onClear: () => setCleared(true) },
                    }}
                />
              </DemoItem>
            </LocalizationProvider>

            <TextField
                variant='standard'
                label='Timing'
                type="text"
                id="timing"
                name="timing"
                placeholder='Timing'
                value={formData.timing}
                onChange={handleChange}
                required
              />

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="category">Category</InputLabel>
                <Select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  label="Age" >
                  <MenuItem value="none">Select</MenuItem>
                  <MenuItem value="music">Music</MenuItem>
                  <MenuItem value="comedy">Comedy</MenuItem>
                  <MenuItem value="sports">Sports</MenuItem>
                  <MenuItem value="birthday">Birthday</MenuItem>
                </Select>
            </FormControl>


            <div>
              <label htmlFor="photo">Photo:</label>
              <input
                className="form-input"
                type="file"
                id="photo"
                name="photo"
                accept="image/*"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="details">Details:</label>
              <textarea
                className="form-textarea"
                id="details"
                name="details"
                value={formData.details}
                onChange={handleChange}
                required
              />
            </div>

            <button className="form-button" type="submit">
              Insert
            </button>
          </form>
        </FormContainer>
      </div>
    </div>
  );
};

export default Insert;
