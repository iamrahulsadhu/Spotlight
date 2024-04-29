import React, { useState } from 'react';

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    name: '',
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
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            placeholder='gg'
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;