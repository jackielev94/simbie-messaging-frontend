import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ThreadWithMessagesDto } from '../types';

export default function ThreadPreview(props: { thread: ThreadWithMessagesDto }) {
  return (
    <>
      <Link to={`/threads/${props.thread.id}`} state={{messages: props.thread.messages}}>
        <Card className="thread" >
          <CardContent>
            <Box>
              <Typography variant="caption">{props.thread.messages[0].created}</Typography>
              <Typography variant="h5">From {props.thread.messages[0].senderId}</Typography>
              <Typography variant="body1">{props.thread.messages[0].content}</Typography>
            </Box>
          </CardContent>
        </Card>
      </Link>
    </>
  )
}
