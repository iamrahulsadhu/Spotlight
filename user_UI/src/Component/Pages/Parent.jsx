//  eta BACKUP code
//  ekhane kichu korbi na







import React, { useState }from "react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";


import {FaHome} from 'react-icons/fa';
import { IoMenu } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoTicketOutline } from "react-icons/io5";
import { BsCalendar4Event } from "react-icons/bs";


const Parent = () => {

  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <motion.div animate={{
        width: isOpen ? "234px" : "55px",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }} style={{
            backgroundColor: "rgb(0,7,61)",
            height: "100vh",
            color: "white",
            position: "fixed",
            display: "flex",
            flexDirection: "column",
          }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          lineHeight: "0",
          padding: "15px 10px",
          fontSize: "30px",
        }}>
          {
              isOpen && <div>Menu</div>
          } 
        <div>
          <IoMenu onClick={toggle} /> 
        </div> </div>

        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          borderRight: "4px solid transparent",
          transition: "0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045)",
          textDecoration: "none",
          fontSize: "20px",
          marginTop: "5rem",
        }}>
          <Link to="/user" className="linkkk" style={{ 
            display: "flex", 
            gap: "15px", 
            padding: "5px 15px",
            }} ><FaHome />
            {
              isOpen && <div>Home</div>
            }
            </Link>

          <Link to="/user/allevents" className="linkkk" style={{ 
            display: "flex", 
            gap: "15px", 
            padding: "5px 15px"
            }}><BsCalendar4Event />
            {
              isOpen && <div>All Events</div>
            }
            </Link>

          <Link to="/user/myevents" className="linkkk" style={{ 
            display: "flex", 
            gap: "15px", 
            padding: "5px 15px"
            }} ><IoTicketOutline />
            {
              isOpen && <div>My Events</div>
            }
            </Link>

          <Link to="/user/rsvp" className="linkkk" style={{ 
            display: "flex", 
            gap: "15px", 
            padding: "5px 15px"
            }} ><FaUserGroup />
            {
              isOpen && <div>RSVP</div>
            }
            </Link>

          <Link to="/user/notifications" className="linkkk" style={{ 
            display: "flex", 
            gap: "15px", 
            padding: "5px 15px"
            }} ><IoIosNotificationsOutline />
            {
              isOpen && <div>Notifications</div>
            }
            </Link>

          <Link to="/user/createevent" className="linkkk" style={{ 
            display: "flex", 
            gap: "15px", 
            padding: "5px 15px"
            }} ><BsCalendar4Event />
            {
              isOpen && <div>Create Event</div>
            }
            </Link>

          <Link to="/" className="linkkk" style={{ 
            marginTop: "6rem", 
            fontSize: "20px", 
            display: "flex", 
            gap: "15px", 
            padding: "5px 15px"
            }}> <div> <RiLogoutCircleRLine /> </div>
            {
              isOpen && <div>Logout</div>
            }
            </Link>
        </div>

      </motion.div>

    </>
  );
};

export default Parent;