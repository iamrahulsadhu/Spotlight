import React from 'react';
import cc from '../../assets/comedyevents.jpg';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TranslateIcon from '@mui/icons-material/Translate';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import XIcon from '@mui/icons-material/X';
import '../../CSS/Eventdetails.css';

const EventDetails = () => {
    return (
        <div>
            <div className='card-container' style={{ marginTop: '30px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <div className="card" style={{ width: '40rem', margin: '10px 20px' }}>
                    <img src={cc} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text" style={{ textAlign: 'left', fontSize: '30px', borderBottom: '1px solid #808080' }}>About</p>
                            <p className='card2-text' style={{textAlign:'left'}}>vsdvvdfvlkniyfbojsbvc8yhsbfihbsiybfks ciyb</p>
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
                                <p>Phalgunir Garer tolai</p>
                            </div>
                            <div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d14707.902672582657!2d88.62413395!3d22.8403897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1688484010581!5m2!1sen!2sin"
                                    width="100%"
                                    height="200"
                                    style={{ border: '0' }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', justifyContent: 'space-around' }}>
                                <MovieCreationIcon style={{ fontSize: '40px' }} />
                                <p style={{ marginTop: '10px', fontSize: '20px' }}>Free</p>
                                <XIcon style={{ marginLeft: '45px' }} />
                                <p>Invite your friends</p>
                            </div>
                            <div>
                                <button type="button" className="btn btn-danger">RSVP/ Add Ticket</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;