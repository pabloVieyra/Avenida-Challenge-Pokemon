import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import photo from '../../../assets/pokemon-logo.png';
import { Link } from 'react-router-dom';


const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Pokédex',
    path: '/pokedex',
  },
];




const Header = () =>  {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    return (
      <AppBar position="static" sx={{
        backgroundColor: 'black',
        color: 'white',
      }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ gap: '2rem' }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              <img src={photo} height="80px"></img>
            </Typography> 
            
  
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {links.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu} component={Link} to={page.path} >
                    <Typography textAlign="center"   >{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              <img src={photo} height="80px"></img>
            </Typography>
            <Box sx={{
                flexGrow: 1,
                display: {
                  xs: 'none',
                  lg: 'flex',
                  justifyContent: 'right',
                },
                alignItems: 'center',
                gap: '0',
              }}>
              {links.map((page) => (
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, 
                  color: 'white', 
                  marginLeft: '1rem',
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                  textTransform: 'none',
                  height: '100%',
                  bgcolor: '#757575'
                  }}
                  component={Link} to={page.path}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  };

export default Header;
