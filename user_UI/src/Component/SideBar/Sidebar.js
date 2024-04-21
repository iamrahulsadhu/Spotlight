import { useState } from 'react';

import { AnimatePresence, motion } from "framer-motion";

import {FaHome} from 'react-icons/fa';
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { IoTicketOutline } from "react-icons/io5";


import { BsCalendar4Event } from "react-icons/bs";
import './Sidebar.css'
import { NavLink } from 'react-router-dom';

// import CreateButton from '../Dashboard/Button/CreateButton';



const routes = [
    {
        path: "/userdashboard/",
        name: "Home",
        icon: <FaHome />
    // },
    // {
    //     path: "/events",
    //     name: "Events",
    //     icon: <BsCalendar4Event />,
    // },
    // {
    //     path: "/invites",
    //     name: "Invites",
    //     icon: <IoTicketOutline />,
    // },
    // {
    //     path: "/rsvp",
    //     name: "Rsvp",
    //     icon: <FaUserGroup />,
    // },
    // {
    //     path: "/notifications",
    //     name: "Notifications",
    //     icon: <IoIosNotificationsOutline />,
}
];

const Sidebar = ({children}) => {

    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    
      const showAnimation = {
        hidden: {
          width: 0,
          opacity: 0,
          transition: {
            duration: 0.5,
          },
        },
        show: {
          opacity: 1,
          width: "auto",
          transition: {
            duration: 0.5,
          },
        },
      };

  return (
    <div className="main-container">
        <motion.div
            animate={{width: isOpen ? "200px" : "37px",
                    transition: {
                        duration: 0.5,
                        type: "spring",
                        damping: 10,
                    },
                    }}
                    className="sidebar"
                    >

            <div className="top-section">
                <AnimatePresence>
                    {isOpen && (<motion.h1
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="logo"
                        > Menu </motion.h1>
                    )}
                </AnimatePresence>

                <div className="bars"><FaBars onClick={toggle} /></div>
            </div>

            <section className="routes">
            <NavLink
                        activeClassName="active"
                        to="/"
                        key="Home"
                        className="link"
                    />
            <NavLink
                        activeClassName="active"
                        to="/invites"
                        key="Invites"
                        className="link"
                    />
                {/* {routes.map((route) => (
                    <NavLink
                        activeClassName="active"
                        to={route.path}
                        key={route.name}
                        className="link"
                    >
                        <div className="icon">{route.icon}</div>
                        <AnimatePresence>
                            {isOpen && (<motion.div
                            variants={showAnimation}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="link_text"
                            >
                                {route.name}
                            </motion.div>
                            )}
                        </AnimatePresence>
                    </NavLink>
                ))} */}
            </section>
        </motion.div>
            
        <main>{children}</main>
    </div>
  )
}

export default Sidebar