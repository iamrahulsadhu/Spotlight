import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, Link, To } from "react-router-dom";
const Home = ({table,data,accept}) => {
  useEffect(() => {
    table();
  }, [data]);

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
              <tbody>
              <tr>
                <th> </th>
                <th colSpan="3">Event Name</th>
                <th colSpan="3">Date</th>
                <th colSpan="3">Timing</th>
                <th>
                  Category
                 </th>
              </tr>
              {data
                ?data.map((e) => {
                    return (
                      <tr key={e._id}>
                        <td>
                          <div className="train-icon">
                            <span>7</span>
                          </div>
                        </td>
                        <td colSpan="3">{e.name}</td>
                        <td>{e.date}</td>
                        <td colSpan="3">{e.timing}</td>
                        <td colSpan="3">{e.category}</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              accept(e._id,e.creatorId);
                            }}
                          >
                            Accept
                          </button>
                        </td>
                        {/* <td>{e.pricePerTicket}</td> */}
                      </tr>
                    );
                  })
                : console.log("No value")}
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
