import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardAction from '@mui/material/CardActionArea'
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { Link, Route, Routes } from 'react-router-dom';
import Thread from './Thread';

export default function ThreadPreview({ thread }) {
  return (
    <>
    <Routes>
      <Route path="threads/:id" element={<Thread messages={thread.messages}/> }/>
    </Routes>
      <Link to={`/threads/${thread.id}`}>
        <Card className="thread" >
          <CardContent>
            <Box>
              <Typography variant="caption">{thread.messages[0].created}</Typography>
              <Typography variant="h5">From {thread.messages[0].senderId}</Typography>
              <Typography variant="body1">{thread.messages[0].content}</Typography>
            </Box>
          </CardContent>
          <CardAction>
            {/* <a href={url}>View {type}</a> */}
          </CardAction>
        </Card>
      </Link>
    </>
  )
}
