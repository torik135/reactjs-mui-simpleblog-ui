import {
  AccountBox,
  Home,
  Person,
  Pages,
  Settings,
  Storefront,
  Groups,
  ModeNight,
} from '@mui/icons-material';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from '@mui/material';
import { Dispatch, ReactNode, SetStateAction } from 'react';

import { sidebarMenu } from '../../constants';

const listIcon = (i: ReactNode) => {
  switch (i) {
    case 'Home':
      return <Home />;
    case 'Pages':
      return <Pages />;
    case 'Groups':
      return <Groups />;
    case 'Storefront':
      return <Storefront />;
    case 'Person':
      return <Person />;
    case 'Settings':
      return <Settings />;
    case 'AccountBox':
      return <AccountBox />;
  }
};

export type SidebarType = {
  setMode: Dispatch<SetStateAction<string>>;
  mode: string;
};

function Sidebar(props: SidebarType) {
  const { setMode, mode } = props;

  return (
    <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position='fixed'>
        <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#modenight'>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch
                onChange={(e) => setMode(mode === 'light' ? 'dark' : 'light')}
              />
            </ListItemButton>
          </ListItem>
          {sidebarMenu.map((i) => (
            <ListItem disablePadding key={Math.random()}>
              <ListItemButton component='a' href={i.href}>
                <ListItemIcon>{listIcon(i.icon)}</ListItemIcon>
                <ListItemText primary={i.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}
export { Sidebar };
