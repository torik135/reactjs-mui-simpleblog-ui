import { Theme } from '@emotion/react';
import {
  Box,
  createTheme,
  PaletteMode,
  Stack,
  ThemeProvider,
} from '@mui/material';
import { useState } from 'react';
import { Feed, Navbar, Rightbar, Sidebar, Add } from './components';

function App() {
  const [mode, setMode] = useState('light');

  const darkTheme: Theme = createTheme({
    palette: {
      mode: mode as PaletteMode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
