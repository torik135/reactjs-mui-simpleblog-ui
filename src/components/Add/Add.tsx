import {
  Fab,
  Modal,
  Tooltip,
  Box,
  Typography,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
  Button,
} from '@mui/material';
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from '@mui/icons-material';
import { useState } from 'react';
import { styled } from '@mui/system';

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const UserBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px',
});

function Add() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Tooltip
        title='Add'
        sx={{
          position: 'fixed',
          bottom: 20,
          left: { xs: 'calc(50% - 25px)', md: 20 },
        }}
        onClick={(e) => setOpenModal(true)}
      >
        <Fab color='info' aria-label='add'>
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal open={openModal} onClose={(e) => setOpenModal(false)}>
        <Box
          width={500}
          height={300}
          bgcolor={'background.default'}
          color={'text.primary'}
          p={3}
          borderRadius={1}
        >
          <Typography variant='h6' color='gray' textAlign='center' mb={1}>
            Post Something...
          </Typography>
          <UserBox>
            <Stack direction='row' alignItems='top' gap={3} width={400}>
              <Stack alignItems='center' gap={2}>
                <Avatar />
                <Typography variant='caption' fontWeight={500}>
                  Mark
                </Typography>
              </Stack>
              <TextField
                multiline
                rows={4}
                variant='standard'
                placeholder='Dont be political!...'
                sx={{ width: '100%', padding: '5px' }}
              />
            </Stack>
            <Stack direction='row' gap={1} mb={1}>
              <EmojiEmotions color='primary' />
              <Image color='secondary' />
              <VideoCameraBack color='success' />
              <PersonAdd color='error' />
            </Stack>
            <ButtonGroup fullWidth variant='contained'>
              <Button>Post</Button>
              <Button sx={{ width: '100px' }}>
                <DateRange />
              </Button>
            </ButtonGroup>
          </UserBox>
        </Box>
      </StyledModal>
    </>
  );
}

export { Add };
