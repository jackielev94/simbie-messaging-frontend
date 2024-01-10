import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ThreadWithMessagesDto } from '../types';
import convertDate from '../utils/dates';

export default function ThreadPreview(props: { thread: ThreadWithMessagesDto, personId: string }) {

  return (
    <>
      <Link to={`/threads/${props.thread.id}`} state={{threadId: props.thread.id, personId: props.personId}}>
        <Card className="thread" >
          <CardContent>
            <Box>
              <Typography variant="caption">{convertDate(props.thread.messages[0]?.created)}</Typography>
              <Typography variant="h5">{props.thread.subject}</Typography>
              <Typography variant="body1">{props.thread.messages[0]?.content.slice(0, 30)}</Typography>
              <Typography variant="caption">From {props.thread.messages[0]?.sender.nameFirst}</Typography>
            </Box>
          </CardContent>
        </Card>
      </Link>
    </>
  )
}
