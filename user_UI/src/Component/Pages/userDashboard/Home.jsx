import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, Link, To } from "react-router-dom";
const Home = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    props.table();
  }, []);

  return (
    <>
      <div className="col-9 pt-3 second-col table-list">
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
        <div className="container-fluid trainTable-mainContainer">
          <div className="train-heading">
            <h5 className="mt-2">Train Table</h5>
          </div>
          <div className="tableContainer">
            <table>
              <tr>
                <th> </th>
                <th colSpan="3">Name</th>
                <th>Number</th>
                <th colSpan="3">Source</th>
                <th colSpan="3">Destination</th>
                <th>
                  Departure
                  <br />
                  Time
                </th>
                <th>
                  Arrival <br />
                  Time
                </th>
                <th>
                  Total <br />
                  Seats
                </th>
                <th>Price</th>
              </tr>
              {console.log("kjsxi")}
              {console.log(props.data)}
              {props.data.data
                ? props.data.data.map((e) => {
                    return (
                      <tr>
                        <td>
                          <div className="train-icon">
                            <span>7</span>
                          </div>
                        </td>
                        <td colSpan="3">{e.trainName}</td>
                        <td>{e.trainNumber}</td>
                        <td colSpan="3">{e.source}</td>
                        <td colSpan="3">{e.destination}</td>
                        <td>{e.departureTime}</td>
                        <td>{e.arrivalTime}</td>
                        <td>{e.totalSeats}</td>
                        <td>{e.pricePerTicket}</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              props.updateTrain(e._id);
                            }}
                          >
                            Edit
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn deleteBtn"
                            onClick={() => {
                              props.deleteTrain(e._id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                        {/* <td>{e.pricePerTicket}</td> */}
                      </tr>
                    );
                  })
                : console.log("No value")}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
