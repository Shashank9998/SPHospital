import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../assets/Logo2.png';
import { Link } from 'react-router-dom';

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/About" },
  { name: "Doctors", path: "/Doctors" },
  { name: "Services", path: "/Services" },
  { name: "Contact", path: "/Contact" },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  return (
    <>
 
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

          body, * {
            font-family: "Poppins", sans-serif !important;
          }

          a {
            text-decoration: none;
            position: relative;
            transition: color 0.4s ease;
            color: inherit;
          }

          a::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0%;
            height: 2px;
            background: #FFD700;
            transition: width 0.3s ease;
          }

          a:hover {
            color: #FFD700 !important;
          }

          a:hover::after {
            width: 100%;
          }
        `}
      </style>

      
      <AppBar position="static" sx={{ background: "#002147" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>

    
            <Link to="/" style={{ textDecoration: "none" }}>
              <img
                src={Logo}
                alt="logo"
                style={{
                  width: 90,
                  height: 75,
                  borderRadius: "6px",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
              />
            </Link>

        
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "end" }}>
              <IconButton onClick={(e) => setAnchorElNav(e.currentTarget)} color="inherit">
                <MenuIcon />
              </IconButton>

              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={() => setAnchorElNav(null)}
                sx={{
                  "& .MuiPaper-root": {
                    backgroundColor: "#002147",
                    color: "#fff",
                  },
                }}
              >
                {pages.map((p) => (
                  <MenuItem
                    key={p.name}
                    onClick={() => setAnchorElNav(null)}
                    component={Link}
                    to={p.path}
                  >
                    {p.name}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

           
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "end" }}>
              {pages.map((p) => (
                <Button
                  key={p.name}
                  component={Link}
                  to={p.path}
                  sx={{
                    color: "white",
                    fontWeight: "600",
                    mx: 1,
                    fontSize: "15px",
                  }}
                >
                  {p.name}
                </Button>
              ))}
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;


