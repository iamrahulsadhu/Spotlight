import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import cc from '../../assets/comedyevents.jpg';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TranslateIcon from '@mui/icons-material/Translate';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import XIcon from '@mui/icons-material/X';
import { CheckCircleOutline } from '@mui/icons-material';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../../CSS/Eventdetails.css';
import '../../CSS/Popup.css'
import { useNavigate } from 'react-router-dom';
const EventDetails = ({ eventDetail, invite, ticket }) => {
    const nav=useNavigate();
    const [paramsid, setParamsid] = useState()
    const [show, setShow] = useState(false);
    const [mail, setMail] = useState("");
    const [emailName, setEmailName] = useState("")
    const [inviteSuccess, setInviteSuccess] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [loading, setLoading] = useState(false); // State for loader
    const { id } = useParams();
    useEffect(() => {
        setParamsid(id);
        eventDetail(id);
        console.log(id);
    }, [])

    const openPopup = () => {
        setShowPopup(true);
    };
    const handleChange=(e)=>{
               setMail(e.target.value)
   }
   const handleEmailChange=(e)=>{
    setEmailName(e.target.value)
}
    const closePopup = () => {
        setShowPopup(false);
    };
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const sendTicket=()=>{
        try {
            console.log(emailName);
            ticket(emailName);
            handleClose();
        } catch (error) {
            alert(error.message) 
        }
      
    }
    const handleSendInvite = () => {
        setLoading(true); // Show loader when sending invite

        // Simulate a delay for demonstration purposes
        setTimeout(() => {
            setLoading(false); // Hide loader after delay
            // Call the invite function here

            invite(paramsid,mail);
            setInviteSuccess(true);
        }, 2000); // Adjust the delay time as needed
    };

    return (
        <div>
               <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <Nav.Link href="#home"><ArrowBackIcon onClick={() => nav('/Events')}/></Nav.Link> {/* Back icon */}
                    <Navbar.Brand href="#home" style={{ fontWeight: 'bold', marginLeft: '30px' }}>Spotlight</Navbar.Brand>
                </Nav>
                <Nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                    <Nav.Link href="#profile"><NotificationsIcon /></Nav.Link> {/* Profile icon */}
                    <span style={{ margin: '0 10px' }}></span> {/* Spacer */}
                    <Nav.Link href="#message"><EmailIcon /></Nav.Link> {/* Message icon */}
                    <span style={{ margin:  '0 10px' }}></span> {/* Spacer */}
                    <Nav.Link><AccountCircleIcon onClick={() => nav(`/${localStorage.getItem("id")}`)}/></Nav.Link> {/* Notification icon */}
                </Nav>

            </Navbar>
            <div className='card-container' style={{ marginTop: '30px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <div className="card" style={{ width: '40rem', margin: '10px 20px' }}>
                    <img src={cc} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text" style={{ textAlign: 'left', fontSize: '30px', borderBottom: '1px solid #808080' }}>About</p>
                        <p className='card2-text' style={{ textAlign: 'left' }}>vsdvvdfvlkniyfbojsbvc8yhsbfihbsiybfks ciyb</p>
                    </div>
                    <div className='card-body2' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '10px' }}>
                        <div style={{ alignSelf: 'flex-start' }}>
                        </div>
                    </div>
                </div>

                <div className="card" style={{ width: '25rem', margin: '10px 20px' }}>

                    <div className="card-body">
                        <p className="card-text" style={{ textAlign: 'left', fontSize: '30px', borderBottom: '1px solid #808080' }}>Standup Comedy:1</p>
                        <div className='icons' style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                                <EventSeatIcon style={{ marginLeft: '10px' }} />
                                <p>Comedy</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                                <AccessTimeIcon style={{ marginLeft: '10px' }} />
                                <p>2h 30m</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                                <TranslateIcon style={{ marginLeft: '10px' }} />
                                <p>Hindi/English</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                                <CalendarMonthIcon style={{ marginLeft: '10px' }} />
                                <p>Thu 22 Jun 2024, 16:00</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                                <LocationOnIcon style={{ marginLeft: '10px' }} />
                                <p>New Town</p>
                            </div>
                            <div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d14707.902672582657!2d88.62413395!3d22.8403897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1688484010581!5m2!1sen!2sin"
                                    width="100%"
                                    height="200"
                                    style={{ border: '0' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', justifyContent: 'space-around' }}>
                                <MovieCreationIcon style={{ fontSize: '40px' }} />
                                <p style={{ marginTop: '10px', fontSize: '20px' }}>Free</p>
                                <XIcon style={{ marginLeft: '45px' }} />
                                <p className="invitestyle" onClick={openPopup}>Invite your friends</p>
                                {showPopup && (
                                    <div className="popup-overlay">
                                        <div className="popup">
                                            Name <input type='text' placeholder='Name' id='name' style={{ borderRadius: '10px', border: '0.5px solid black', marginBottom: '10px', color: 'black' }} />
                                            Email <input type='email' placeholder='Email' id='email'onChange={(e)=>handleChange(e)} style={{ borderRadius: '10px', border: '0.5px solid black', marginBottom: '10px', color: 'black' }} />

                                            <div className="popup-buttons">
                                                {/* Disable button when loading */}
                                                <button type="button" className="btn btn-primary" style={{ width: '100%' }} onClick={handleSendInvite} disabled={loading}>
                                                    {loading ? 'Sending...' : 'Send'}
                                                </button>
                                                <button type="button" className="btn btn-danger" style={{ width: '100%' }} onClick={closePopup}>Cancel</button>
                                            </div>
                                            {inviteSuccess && (
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <CheckCircleOutline style={{ color: 'green' }} />

                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div>
                                {/* <button type="button" className="btn btn-danger" style={{ width: '100%' }} onClick={ticket}>RSVP/ Add Ticket</button> */}
                                <button type="button" className="btn btn-danger" style={{ width: '100%' }} onClick={handleShow}>RSVP/ Add Ticket</button>
                                {setShow && (
                                    <>
                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Send Ticket</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <Form>
                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                        <Form.Label>Name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="ankit kesari"
                                                            autoFocus
                                                           
                                                        />
                                                        <Form.Label style={{marginTop:'10px'}}>Email</Form.Label>
                                                        <Form.Control
                                                            type="email"
                                                            value={emailName}
                                                            onChange={handleEmailChange}
                                                            placeholder="name@example.com"
                                                            autoFocus
                                                            style={{marginTop:'5px'}}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group
                                                        className="mb-3"
                                                        controlId="exampleForm.ControlTextarea1"
                                                    >
                                                        <Form.Label>Type Your Message</Form.Label>
                                                        <Form.Control as="textarea" rows={3} />
                                                    </Form.Group>
                                                </Form>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}>
                                                    Close
                                                </Button>
                                                <Button variant="primary" style={{width:'30%'}} onClick={sendTicket}>
                                                    Send Ticket
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;