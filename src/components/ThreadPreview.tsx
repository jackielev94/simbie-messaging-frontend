import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { ThreadWithMessagesDto } from '../types';
import moment from "moment";

export default function ThreadPreview(props: { thread: ThreadWithMessagesDto }) {
  function convertDate(date: string) {
    const newDate = moment(date).format("MM/DD/YYYY");
    return newDate;
  }
  return (
    <>
      <Link to={`/threads/${props.thread.id}`} state={{threadId: props.thread.id}}>
        <Card className="thread" >
          <CardContent>
            <Box>
              <Typography variant="caption">{convertDate(props.thread.messages[0].created)}</Typography>
              <Typography variant="h5">{props.thread.messages[0].content}</Typography>
              <Typography variant="body1">From {props.thread.messages[0].sender.nameFirst}</Typography>
            </Box>
          </CardContent>
        </Card>
      </Link>
    </>
  )
}
