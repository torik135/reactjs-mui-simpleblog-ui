import { Box } from '@mui/material';
import { Post } from '../';

import { postList } from '../../constants';

function Feed() {
  return (
    <Box flex={4} p={2}>
      {postList.map((i) => (
        <Post
          title={i.title}
          subheader={i.subheader}
          body={i.body}
          key={Math.random()}
        />
      ))}
    </Box>
  );
}
export { Feed };
