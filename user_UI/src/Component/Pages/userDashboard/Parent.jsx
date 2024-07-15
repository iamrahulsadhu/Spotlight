import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

// icons
import { FaHome } from 'react-icons/fa';
import { IoMenu, IoClose } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoTicketOutline } from "react-icons/io5";
import { BsCalendar4Event } from "react-icons/bs";

const Parent = () => {
  const { id } = useParams();

  // Sidebar Animation
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className="col-4 side-nav" style={{
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
          position: "fixed",
          display: "flex",
          flexDirection: "column",
        }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              lineHeight: "0",
              padding: "15px 10px",
              fontSize: "25px",
            }}
          >
            {isOpen && <div>UserDashboard</div>}
            <div>
              {isOpen ? <IoClose onClick={toggle} /> : <IoMenu onClick={toggle} />}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              borderRight: "4px solid transparent",
              transition: "0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045)",
              textDecoration: "none",
              fontSize: "20px",
              marginTop: "5rem",
            }}
          >
            <Link
              to={`/${localStorage.getItem("id")}`}
              style={{
                display: "flex",
                gap: "15px",
                padding: "5px 15px",
              }}
            >
              <FaHome />
              {isOpen && <div>Home</div>}
            </Link>

            <Link
              to={`/${id}/allevents`}
              style={{
                display: "flex",
                gap: "15px",
                padding: "5px 15px",
              }}
            >
              <BsCalendar4Event />
              {isOpen && <div>All Events</div>}
            </Link>

            <Link
              to={`/${id}/myevents`}
              style={{
                display: "flex",
                gap: "15px",
                padding: "5px 15px",
              }}
            >
              <IoTicketOutline />
              {isOpen && <div>My Events</div>}
            </Link>

            <Link
              to={`/${id}/rsvp`}
              style={{
                display: "flex",
                gap: "15px",
                padding: "5px 15px",
              }}
            >
              <FaUserGroup />
              {isOpen && <div>RSVP</div>}
            </Link>

            <Link
              to={`/${id}/notifications`}
              style={{
                display: "flex",
                gap: "15px",
                padding: "5px 15px",
              }}
            >
              <IoIosNotificationsOutline />
              {isOpen && <div>Notifications</div>}
            </Link>

            <Link
              to={`/${id}/create`}
              style={{
                display: "flex",
                gap: "15px",
                padding: "5px 15px",
              }}
            >
              <BsCalendar4Event />
              {isOpen && <div>Create Event</div>}
            </Link>

            <Link
              to="/"
              style={{
                marginTop: "6rem",
                fontSize: "20px",
                display: "flex",
                gap: "15px",
                padding: "5px 15px",
              }}
            >
              <div>
                <RiLogoutCircleRLine />
              </div>
              {isOpen && <div>Logout</div>}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parent;
