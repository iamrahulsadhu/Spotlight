import React from "react";
import { useFormik } from "formik";
const Insert = (props) => {
  const formik = useFormik({
    initialValues: {
      trainName: "",
      trainNumber: "",
      source: "",
      destination: "",
      acSeats: "",
      nonAcSeats: "",
      pricePerTicket: "",
      departureTime: "",
      arrivalTime: "",
    },
    // },
    // onSubmit:(values) => {
    //     props.insertData(e,values);
    // }
  });
  return (
    <>
      <div className="col-10 pt-3 second-col table-list insertPart">
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
            <div className="updateImg"></div>
            <form className="d-flex flex-column form">
              <div className="formInput-container">
                <input
                  type="text"
                  className="updateInput"
                  name="trainName"
                  onChange={formik.handleChange}
                  placeholder="Train Name"
                />
                <input
                  type="text"
                  className="updateInput"
                  name="trainNumber"
                  onChange={formik.handleChange}
                  placeholder="Train Number"
                />
              </div>
              <div className="formInput-container">
                <input
                  type="text"
                  className="updateInput"
                  name="source"
                  onChange={formik.handleChange}
                  placeholder="Source Station"
                />
                <input
                  type="text"
                  className="updateInput"
                  name="destination"
                  onChange={formik.handleChange}
                  placeholder="Destination Station"
                />
              </div>
              <div className="formInput-container">
                <input
                  type="text"
                  className="updateInput"
                  name="departureTime"
                  onChange={formik.handleChange}
                  placeholder="Departure Time"
                />
                <input
                  type="text"
                  className="updateInput"
                  name="arrivalTime"
                  onChange={formik.handleChange}
                  placeholder="Arrival time"
                />
              </div>
              <div className="formInput-container">
                <input
                  type="text"
                  className="updateInput"
                  name="acSeats"
                  onChange={formik.handleChange}
                  placeholder="Number of Ac seats"
                />
                <input
                  type="text"
                  className="updateInput"
                  name="nonAcSeats"
                  onChange={formik.handleChange}
                  placeholder="Number of Non Ac seats"
                />
              </div>
              {/* <div className="formInput-container"> */}
                <input
                  type="text"
                  className="updateInput updateInput1"
                  name="pricePerTicket"
                  onChange={formik.handleChange}
                  placeholder="Price"
                />

              <div className="btn-container d-flex align-items-center justify-content-center pt-3">
                <button
                  className="btn updateBtn"
                  onClick={(e) => props.insertData(e, formik.values)}
                >
                  Insert
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insert;
