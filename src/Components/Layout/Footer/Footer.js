import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Container, Box, TableFooter} from '@mui/material';
import photo from '../../../assets/pokebola-logo.png';


const Footer = () => {
  const linkStyle = { textDecoration: 'none', color: 'white' };
  
  return (
    <TableFooter
      sx={{
        display: { xs: 'flex' },
        justifyContent: { xs: 'center' },
        alignItems: { xs: 'center' },
        flexDirection: { xs: 'column' },
        backgroundColor: 'black',
        color: 'white',
        marginTop: 'auto',
      }}>
      <Container
        sx={{
          display: { xs: 'grid', sm: 'flex' },
          justifyContent: { xs: 'center' },
          alignItems: { xs: 'center' },
        }}>
        <Box
          sx={{
            display: { xs: 'flex' },
            justifyContent: { xs: 'center' },
            alignItems: { xs: 'center' },
            flexDirection: { xs: 'column' },
            width: { xs: '100%' },
          }}>
          <img src={photo} alt={'logo'} height="120px" />
        </Box>
        <Box
          sx={{
            display: { xs: 'flex' },
            width: { xs: '100%' },
            justifyContent: { xs: 'space-evenly' },
            alignItems: { xs: 'center' },
            flexWrap: { xs: 'wrap' },
          }}>
          <Box
            sx={{
              margin: '3px',
            }}>
            <a style={linkStyle} rel="noreferrer" target="_blank" href="https://github.com/pabloVieyra/Avenida-Challenge-Pokemon">
              GitHub
            </a>
          </Box>
          <Box
            sx={{
              margin: '3px',
            }}>
            <a style={linkStyle} rel="noreferrer" target="_blank"  href="https://pokeapi.co/">
              Api Pokemon
            </a>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'flex' },
            width: { xs: '100%' },
            justifyContent: { xs: 'space-evenly' },
          }}>

          <a
            href='https://www.linkedin.com/in/pablo-vieyra/'
            rel="noreferrer"
            target="_blank">
            <LinkedInIcon
              sx={{
                fontSize: 40,
                textDecoration: 'none',
                color: '#28527A',
              }}
            />
          </a>
        </Box>
      </Container>
      <div style={{ margin: 'auto', display: 'block' }}>
        
      </div>
    </TableFooter>
  );
};

export default Footer;
