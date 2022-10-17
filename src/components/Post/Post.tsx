import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';

import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from '@mui/material';

import { defaultimg } from '../../assets';

export type PostType = {
  title: string;
  subheader: string;
  body: string;
};

function Post(props: PostType) {
  const { title, subheader, body } = props;
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label='R'>
            R
          </Avatar>
        }
        action={
          <IconButton>
            <MoreVert />
          </IconButton>
        }
        title={title}
        subheader={subheader}
      />
      <CardMedia
        component='img'
        height='20%'
        image={defaultimg}
        alt='zuck-image'
      />
      <CardContent>
        <Typography variant='body2' color='text-secondary'>
          {body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorite'>
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite color='error' />}
          />
        </IconButton>
        <IconButton aria-label='share'>
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export { Post };
