import React, { useState } from 'react';  
import {Box, styled } from '@mui/material';


const FormContainer = styled(Box)`
width: 400px;
  margin: 0 auto;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Insert = () => {
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
        <h2>Insert Event</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name: </label>
              <input
                className="form-input"
                type="text"
                id="name"
                name="name"
                placeholder='Event Name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="date">Date:</label>
              <input
                className="form-input"
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="timing">Timing:</label>
              <input
                className="form-input"
                type="text"
                id="timing"
                name="timing"
                value={formData.timing}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="category">Category: </label>
              <select name="category" id="category"
                value={formData.category}
                onChange={handleChange}>
                <option value="none">Select</option>
                <option value="music">Music</option>
                <option value="comedy">Comedy</option>
                <option value="sports">Sports</option>
                <option value="birthday">Birthday</option>
              </select>
            </div>
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
