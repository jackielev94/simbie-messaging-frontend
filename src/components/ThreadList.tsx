import MessageIcon from '@mui/icons-material/Message';
import ThreadPreview from "./ThreadPreview";
import { useThreads } from "../dataHooks";
import { ThreadWithMessagesDto } from '../types';

export default function ThreadList() {

  const { threads } = useThreads('f40c0b3a-56bb-41ff-a61a-746e55ede257');
  return (
    <>
      <div className="ThreadsHeader">
      <h2>Conversations</h2>
      <div className="icon-container">
        <h2 className="ConversationsHead">Send a new message</h2>
        <MessageIcon
          sx={{
            height: 'auto',
          }}
          className="icon"
        />
      </div>
    </div>
      {threads.map((thread: ThreadWithMessagesDto) => {
          return (
            <ThreadPreview key={thread.id} thread={thread}/>
          )
      })}
    </>
  )
}
