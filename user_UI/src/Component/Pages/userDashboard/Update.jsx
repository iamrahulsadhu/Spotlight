import React from 'react';
import { useFormik } from 'formik';
const Update = (props) => {
  // console.log(props.updateData.JSON());
  const formik = useFormik({
    initialValues: {
      trainName:props.updateData.trainName,
      trainNumber:props.updateData.trainNumber,
      source:props.updateData.source,
      destination:props.updateData.destination,
      acSeats:props.updateData.acSeats,
      nonAcSeats:props.updateData.nonAcSeats,
      pricePerTicket:props.updateData.pricePerTicket,
      departureTime:props.updateData.departureTime,
      arrivalTime:props.updateData.arrivalTime
    }
    })
  return (
    <>
      <div className="col-9 pt-3 second-col table-list insertPart">
        <header className="head">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Navbar
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Dashboard
                    </a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </header>
        <div className="formMain-container">
        <div className="form-container updateForm">
            <div className="updateImg">
            </div>
        <form className='d-flex flex-column form'>
        <div className="formInput-container">
        <input type="text"className="updateInput" value={formik.values.trainName} onChange={formik.handleChange} name="trainName" placeholder="Train Name"/>
        <input type="text"className="updateInput" value={formik.values.trainNumber} onChange={formik.handleChange} name="trainNumber" placeholder="Train Number"/>
        </div>
        <div className="formInput-container">
        <input type="text"className="updateInput"value={formik.values.source} onChange={formik.handleChange} name="source" placeholder="Source Station"/>
        <input type="text" className="updateInput" value={formik.values.destination} onChange={formik.handleChange} name="destination" placeholder="Destination Station"/>
        </div>
        <div className="formInput-container">
        <input type="text"className="updateInput" value={formik.values.departureTime} onChange={formik.handleChange} name="departureTime" placeholder="Departure Time"/>
        <input type="text" className="updateInput" value={formik.values.arrivalTime} onChange={formik.handleChange} name="arrivalTime" placeholder="Arrival Time"/>
        </div>
        <div className="formInput-container">
        <input type="text"className="updateInput" value={formik.values.acSeats} onChange={formik.handleChange} name="acSeats" placeholder="Number of Ac seats"/>
        <input type="text" className="updateInput" value={formik.values.nonAcSeats} onChange={formik.handleChange} name="nonAcSeats" placeholder="Number of Non Ac seats"/>
        </div>
        {/* <div className="formInput-container"> */}
        <input type="text" className="updateInput updateInput1" value={formik.values.pricePerTicket} onChange={formik.handleChange} name="pricePerTicket" placeholder="Price"/>
        {/* </div> */}
        <div className="btn-container d-flex align-items-center justify-content-center pt-3">
        <button className="btn updateBtn"onClick={()=>{props.updateTrainData(props.updateData._id,formik.values)}}>Update</button>    
        </div> 
        </form>
        </div>
        </div>
        </div>
    </>
  )
}

export default Update
