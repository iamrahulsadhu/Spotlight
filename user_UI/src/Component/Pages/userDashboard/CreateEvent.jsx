import React, { useState, useLayoutEffect } from 'react';
import {useParams} from 'react-router-dom';
import "../../../CSS/newEventCreateForm.css"


const CreateEvent = ({createEvent}) => {

  //for changing the bg image
  useLayoutEffect(() => {
    document.body.style.backgroundImage = "url(https://www.prasidhcaterers.com/wp-content/uploads/2022/06/event-management.jpg)"
  });


  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    category:'',
    date: '',
    timing: '',
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
    try{
    e.preventDefault();
    createEvent(formData,id);
    console.log(formData);
    setFormData({
        name: '',
        date: '',
        category:'',
        timing: '',
        photo: '',
        details: ''
    });
  }
  catch(err)
  {
    console.log(err.message); 
  }
  };

  return (
    <div className="formm-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            className="formm-input"
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
            className="formm-input"
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
            className="formm-input"
            type="text"
            id="timing"
            name="timing"
            value={formData.timing}
            onChange={handleChange}
            required
          />
        </div>
        {/* <div>
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
        </div> */}
        <div>
          <label htmlFor="timing">Category:</label>
          {/* <input
            className="form-input"
            type="text"
            id="timing"
            name="timing"
            value={formData.timing}
            onChange={handleChange}
            required
          /> */}
          <select name="category" id="category" className="form-input"
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
          <label htmlFor="details">Details:</label>
          <textarea
            className="formm-textarea"
            id="details"
            name="details"
            value={formData.details}
            onChange={handleChange}
            required
          />
        </div>
        <button className="formm-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;