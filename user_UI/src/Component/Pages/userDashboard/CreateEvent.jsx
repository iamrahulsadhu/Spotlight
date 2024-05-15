import React, { useState } from "react";
const CreateEvent = () => {
  // State variables to store form data
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [timing, setTiming] = useState("");
  const [photo, setPhoto] = useState(null);
  const [eventDetails, setEventDetails] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { eventName, date, timing, photo, eventDetails });
    // Reset form fields after submission
    setEventName("");
    setDate("");
    setTiming("");
    setPhoto(null);
    setEventDetails("");
  };

  return (
    <div>
      <h2>Add New Event</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="eventName">Event Name:</label>
          <input
            type="text"
            id="eventName"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="timing">Timing:</label>
          <input
            type="text"
            id="timing"
            value={timing}
            onChange={(e) => setTiming(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="photo">Photo:</label>
          <input
            type="file"
            id="photo"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
          />
        </div>
        <div>
          <label htmlFor="eventDetails">Event Details:</label>
          <textarea
            id="eventDetails"
            value={eventDetails}
            onChange={(e) => setEventDetails(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};


export default CreateEvent;
