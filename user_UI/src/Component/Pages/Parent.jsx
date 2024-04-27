import React from "react";
import {FaHome} from 'react-icons/fa';
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";
import { IoTicketOutline } from "react-icons/io5";
import { BsCalendar4Event } from "react-icons/bs";
import { Link } from "react-router-dom";
const Parent = () => {
  return (
    <>
    <div>
      <div className="col-12 side-nav" style={{
        backgroundColor: "#000066",
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        height: "100%",
        margin: "0",
        padding: "0"
      }}>
        <div className="titlee" style={{
          color: "white",
          display: "flex",
          padding: "15px 10px"
        }}>
          <h5>User Dashboard</h5>
        </div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        color: "white",
        gap: "12px",
        padding: "10px 10px",
        borderRight: "4px solid transparent",
        transition: "0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045)",
        textDecoration: "none",
        whiteSpace: "nowrap",
        fontSize: "18px",
        cursor: "pointer",
        marginTop: "5rem"
      }}>
        <Link to="/user" className="linkStyle"><FaHome /> Home</Link>
        <Link to="/user/allevents" ><BsCalendar4Event /> All Events</Link>
        <Link to="/user/myevents" ><IoTicketOutline /> My Events</Link>
        <Link to="/user/rsvp" ><FaUserGroup /> RSVP</Link>
        <Link to="/user/notifications" ><IoIosNotificationsOutline /> Notifications</Link>
        <Link to="/user/createevent" >Create Event</Link>
        <Link to="/" style={{ marginTop: "18rem" }}>Logout</Link>
        </div>
      </div>

    </div>

    </>
  );
};

export default Parent;