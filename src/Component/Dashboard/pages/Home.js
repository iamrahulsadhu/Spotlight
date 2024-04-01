import React, { useEffect, useState } from "react";

import {Box, styled} from "@mui/material";
import CreateButton from "../Button/CreateButton";
import NotFoundEvent from '../../../assets/eventNotFound.svg'

import './Style.css';

const Wrapper = styled(Box)`
    height: 100%;
    // width: 77%;
    margin-left: 15rem;
`;

const Home = (props) => {

    const [date, setDate] = useState(new Date());
    const [body, setBody] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
          setDate(new Date());
        }, 1000);
        return () => {
          clearInterval(timer);
        };
      }, [date]);

    return(
        <div className="wrapper">
            <div className="head-section">
                <div>
                    <h1 style={{fontFamily: "serif", fontWeight: "bold"}}>{props.title}</h1>
                    <p style={{marginTop: "-1%"}}>{date.toString()}</p>
                </div>
                <CreateButton />
            </div>

            {/* <div className="main-content">
            <p className="text-style">No events found. Add your first event.</p> 
            <img alt="not found" src={NotFoundEvent} className="noeventlogo"/>
            </div> */}
        </div>
    )
}

export default Home;