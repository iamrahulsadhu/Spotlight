import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Di from '../assets/title-logo.png';
import { useNavigate } from 'react-router-dom';
import '../App.css'
const drawerWidth = 240;
const navItems = ['Explore', 'Login', 'Signup'];

const Landing = () => {
    const [isLogin, setIsLogin] = useState(false);
    const nav = useNavigate();

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const handleClick = (item) => {
        localStorage.setItem("logid",true);
        let i=localStorage.getItem("logid");
        console.log(i);
        setIsLogin(i);
        switch (item) {
            case 'Explore':
                console.log(isLogin);
               i===true?nav("/events"):nav("/login")
                break;
            case 'Login':
                i?nav("/login"):alert("You are already logged in")
                break;
            case 'Signup':
                nav('/Signup');
                break;
            default:
                console.log('wrong choice');
        }
    };


    const drawer = (
        <Box  onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handleClick(item)}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex', backgroundColor: '#040d3d', minHeight: '90vh' }}>
            <CssBaseline />
            <AppBar className='head' component="nav" position="fixed" sx={{ background: '#040d3d' }}>
                <Toolbar sx={{ marginRight:10 }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                        <img src={Di} alt="Logo" style={{ height: 'auto', maxHeight: 40, marginLeft: 100 }} />

                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block',md:'flex',xl:'flex'} }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: '#fff', textTransform: 'lowercase' }} onClick={() => handleClick(item)}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main" sx={{ p: 3, flexGrow: 1,width:'100vw'}}>
                <Toolbar />
                <div style={{ marginTop: 100 }}>
                    <h1 style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', color: 'white', fontSize: '5rem',fontWeight:'bold' }}>Spotlight Your Creativity{'\n'}</h1>
                    <h1 style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', color: 'white', fontSize: '5rem',fontWeight:'bold' }}>Curate Unforgettable Events</h1>
                    <h1 style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', color: 'grey', fontSize: '1rem', marginTop: 35 }}>RSVP and Management Made Effortless for Creators</h1>
                </div>
                <div  style={{ display: 'flex', justifyContent: 'center', marginTop: 55 }}>
                    <Button   style={{ marginRight: 20, borderRadius:30,backgroundColor:'#63d3ff',color:'#fff',height:50,width:150 }}>
                        Get Started
                    </Button>
                    <Button  style={{borderRadius:30,backgroundColor:'#e81361',color:'#fff',height:50,width:150}}onClick={() => handleClick("Explore")}>
                        Explore Events
                    </Button>
                </div>
            </Box>
        </Box>

    );
};

export default Landing;