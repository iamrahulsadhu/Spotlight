import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Events from '../../assets/events.jpg'
import Music from '../../assets/musicevent.jpg'
import Thrill from '../../assets/thrillerevents.jpg'
import Action from '../../assets/actionevents.jpg'
import Sport from '../../assets/sportsevents.png'
import Comedy from '../../assets/comedyevents.jpg'
import { useNavigate } from 'react-router-dom';
import { useEffect,useState} from 'react';
import axios from 'axios';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Content = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
}));

const CategoryFilter = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
  justifyContent: 'center',
}));

const CategoryButton = styled(Typography)(({ theme, selected }) => ({
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  position: 'relative', // Required for positioning the line
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: selected ? 2 : 0, // Add line height only if selected
    backgroundColor: theme.palette.primary.main,
    transition: 'height 0.3s ease',
  },
}));

const ContentItem = ({ title, image, description,date,id}) => {
  const navigate=useNavigate();
  const [isHovered, setIsHovered] = React.useState(false);
  const handleClick=()=>{
    navigate(`/events/event/${id}`)
  }
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Grid item xs={12} md={4}>
      <Paper
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          transition: 'transform 0.3s ease',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)', // Increase scale on hover
        }}
      >
        <Content>
          <Typography variant="h6">{title}</Typography>
          <img src={image} alt={title} style={{ width: '100%', height: 'auto', marginBottom: '1rem' }} />
          <Typography>{description}</Typography>
        </Content>
      </Paper>
    </Grid>
  );
};


function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'black'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Spotlight
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

export default function App() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [displayCount, setDisplayCount] = useState(6);
let dbData;
useEffect(() => {
  fetchEvents();
}, [])
const handleSeeMore = () => {
  setDisplayCount(prevCount => prevCount + 6);
};

const fetchEvents=async()=>{
  try {
    const headers = {
      'Authorization': `Bearer ${localStorage.getItem('token')}`, // Example of an authorization header
      'Content-Type': 'application/json', // Example of a content type header
      // Add more headers as needed
    };
    dbData=await axios.get("http://localhost:4000/allevent",{headers})
    setData(dbData.data.data);
    // setFilterData(dbData.data.data)
  } catch (err) {
    console.log(err.message);
  }
}
console.log(data);
console.log(dbData);
const [selectedCategory, setSelectedCategory] = React.useState('all');
const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  switch (category) {
    case 'all':{
     setDisplayCount(6);
    setData(filterData);
    break;
    }
    case 'music':{
     let filter=filterData.filter((e)=>{
     return e.category=='music';
     })
     setDisplayCount(6);
    setData(filter)
      break;
    }
    case 'action':{
      let filter=filterData.filter((e)=>{
      return e.category=='action';
      })
     setDisplayCount(6);
     setData(filter)
       break;
     }
     case 'sports':{
      let filter=filterData.filter((e)=>{
      return e.category=='sports';
      })
     setDisplayCount(6);;
     setData(filter)
       break;
     }
     case 'comedy':{
      let filter=filterData.filter((e)=>{
      return e.category=='comedy';
      })
     setDisplayCount(6);
     setData(filter)
       break;
     }
     case 'thriller':{
      let filter=filterData.filter((e)=>{
      return e.category=='thriller';
      })
      console.log(filter);
     setDisplayCount(6);
     setData(filter)
       break;
     }
    default:
      break;
  }
    // Handle category selection logic here, like filtering content
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '30vh' }}>
      <PrimarySearchAppBar />
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <CategoryFilter>
          <CategoryButton
            selected={selectedCategory === 'all'}
            variant={selectedCategory === 'all' ? 'h6' : 'body1'}
            onClick={() => handleCategorySelect('all')}
          >
            All
          </CategoryButton>
          <CategoryButton
            selected={selectedCategory === 'music'}
            variant={selectedCategory === 'music' ? 'h6' : 'body1'}
            onClick={() => handleCategorySelect('music')}
          >
            Music
          </CategoryButton>
          <CategoryButton
            selected={selectedCategory === 'action'}
            variant={selectedCategory === 'action' ? 'h6' : 'body1'}
            onClick={() => handleCategorySelect('action')}
          >
            Action
          </CategoryButton>
          <CategoryButton
            selected={selectedCategory === 'sports'}
            variant={selectedCategory === 'sports' ? 'h6' : 'body1'}
            onClick={() => handleCategorySelect('sports')}
          >
            Sports
          </CategoryButton>
          <CategoryButton
            selected={selectedCategory === 'comedy'}
            variant={selectedCategory === 'comedy' ? 'h6' : 'body1'}
            onClick={() => handleCategorySelect('comedy')}
          >
            Comedy
          </CategoryButton>
          <CategoryButton
            selected={selectedCategory === 'thriller'}
            variant={selectedCategory === 'thriller' ? 'h6' : 'body1'}
            onClick={() => handleCategorySelect('thriller')}
          >
            Thriller
          </CategoryButton>
        </CategoryFilter>
        <Grid container spacing={3}>
  {data.length > 0 && (
   data.slice(0, displayCount).map((e) => (
      <React.Fragment key={e.eventName}>
        <ContentItem
          title={e.eventName}
          image={Events}
          description={e.details}
          category={e.category}
          id={e._id}
        />
      </React.Fragment>
    ))
  )}
  {data.length > displayCount && (
    <Box sx={{ textAlign: 'center', marginTop: 3 }}>
      <Button variant="outlined" onClick={handleSeeMore}>See more</Button>
    </Box>
  )}
   {data.length === 0 && (
          <Typography variant="body1" align="center">
            No events found in this category.
          </Typography>
        )}

  
</Grid>
             {/* <ContentItem
                title="Content 2 for All"
                image={Events}
                description="Description for Content 2"
              />
              <ContentItem
                title="Content 3 for All"
                image={Events}
                description="Description for Content 3"
              /> */}
              {/* Add more ContentItems as needed */}
        
          {/* {selectedCategory === 'Music' && (
            <>
              <ContentItem
                title="Music Content 1"
                image={Music}
                description="Description for Music Content 1"
              />
              <ContentItem
                title="Music Content 2"
                image={Music}
                description="Description for Music Content 2"
              />
              <ContentItem
                title="Music Content 3"
                image={Music}
                description="Description for Music Content 3"
              />
          )} */}
          {/* {selectedCategory === 'Action' && (
            <>
              <ContentItem
                title="Action Content 1"
                image={Action}
                description="Description for Action Content 1"
              />
               <ContentItem
                title="Action Content 2"
                image={Action}
                description="Description for Action Content 2"
                
              />
               <ContentItem
                title="Action Content 3"
                image={Action}
                description="Description for Action Content 3"
              />
            </>
          )}
          {selectedCategory === 'Sports' && (
            <>
              <ContentItem
                title="Sports Content 1"
                image={Sport}
                description="Description for Sports Content 1"
              />
              <ContentItem
                title="Sports Content 2"
                image={Sport}
                description="Description for Sports Content 2"
              />
              <ContentItem
                title="Sports Content 3"
                image={Sport}
                description="Description for Sports Content 3"
              />
            </>
          )}
          {selectedCategory === 'Comedy' && (
            <>
              <ContentItem
                title="Comedy Content 1"
                image={Comedy}
                description="Description for Comedy Content 1"
              />
               <ContentItem
                title="Comedy Content 2"
                image={Comedy}
                description="Description for Comedy Content 2"
              />
               <ContentItem
                title="Comedy Content 3"
                image={Comedy}
                description="Description for Comedy Content 3"
              />
            </>
          )}
          {selectedCategory === 'Thriller' && (
            <>
              <ContentItem
                title="Thriller Content 1"
                image={Thrill}
                description="Description for Thriller Content 1"
              />
              <ContentItem
                title="Thriller Content 2"
                image={Thrill}
                description="Description for Thriller Content 2"
              />
              <ContentItem
                title="Thriller Content 3"
                image={Thrill}
                description="Description for Thriller Content 3"
                
              /> */}
              {/* Add more ContentItems as needed */}
      </Box>
    </Box>
  );
}