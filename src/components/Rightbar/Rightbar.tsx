import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';

import { avatarImg, imgList, convList } from '../../constants';

function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position='fixed' width={300}>
        <Box boxShadow={2} p={2} borderRadius={1}>
          <Typography variant='h6' fontWeight={100}>
            Online
          </Typography>
          <AvatarGroup max={5} sx={{ justifyContent: 'left' }}>
            {avatarImg.map((i) => (
              <Avatar src={i.imgSrc} alt={i.imgAlt} />
            ))}
          </AvatarGroup>
        </Box>
        <Box boxShadow={2} p={2} borderRadius={1}>
          <Typography variant='h6' fontWeight={100} mt={3} mb={2}>
            Latest Conversations
          </Typography>
          <List>
            {convList.map((i) => (
              <>
                <ListItem alignItems='flex-start'>
                  <ListItemAvatar>
                    <Avatar />
                  </ListItemAvatar>
                  <ListItemText
                    primary={i.primary}
                    secondary={
                      <>
                        <Typography
                          sx={{ display: 'inline' }}
                          component='span'
                          variant='body2'
                          color='text.primary'
                        >
                          {i.name}
                        </Typography>
                        {` - ${i.msg}`}
                      </>
                    }
                  />
                </ListItem>
                <Divider variant='inset' component='li' />
              </>
            ))}
          </List>
        </Box>
        <Box boxShadow={2} p={2} borderRadius={1}>
          <Typography variant='h6' fontWeight={100} mt={3} mb={2}>
            Latest Photos
          </Typography>
          <ImageList cols={3} rowHeight={100} gap={5}>
            {imgList.map((i) => (
              <ImageListItem key={Math.random()}>
                <img src={i.src} alt={i.alt} />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
    </Box>
  );
}
export { Rightbar };
