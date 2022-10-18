import { styled } from '@mui/system';
import { Mail, Notifications, Yard, Person } from '@mui/icons-material';
import {
  AppBar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const StyledSearch = styled('div')(({ theme }) => ({
  backgroundColor: 'whitesmoke',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}));

const StyledIcons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

const StyledUserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

function Navbar() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
          torik135
        </Typography>
        <Yard sx={{ display: { xs: 'block', sm: 'none' } }} />
        <StyledSearch>
          <InputBase placeholder='Search here...' sx={{ color: '#000' }} />
        </StyledSearch>
        <StyledIcons>
          <Badge badgeContent={4} color='error'>
            <Mail />
          </Badge>
          <Badge badgeContent={4} color='error'>
            <Notifications />
          </Badge>
          {/* <Avatar/>*/}
          <Person
            sx={{ width: 30, height: 30 }}
            onClick={(e) => setOpenMenu(true)}
          />
        </StyledIcons>
        <StyledUserBox onClick={(e) => setOpenMenu(true)}>
          {/* <Avatar/>*/}
          <Person sx={{ width: 30, height: 30 }} />
          <Typography>torik135</Typography>
        </StyledUserBox>
      </StyledToolbar>
      <Menu
        id='menu'
        aria-label='menu'
        open={openMenu}
        onClose={(e) => setOpenMenu(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>Account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export { Navbar };
