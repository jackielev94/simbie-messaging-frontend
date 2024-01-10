import MessageIcon from '@mui/icons-material/Message';
import ThreadPreview from "./ThreadPreview";
import { useThreads } from "../dataHooks";
import { ThreadWithMessagesDto } from '../types';
import SendMessageForm from './SendMessageForm';
import { useState } from 'react';

export default function ThreadList() {
  const [open, setOpen] = useState(false);

  // TODO replace person id
  const { threads, reloadThreads } = useThreads('f40c0b3a-56bb-41ff-a61a-746e55ede257');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async () => {
    setOpen(false);
  };

  const updateThreads = async () => {
    reloadThreads()
  }


  return (
    <>
      <div className="ThreadsHeader">
      <h2>Conversations</h2>
      <div className="icon-container">
        <h2 className="ConversationsHead">Send a new message</h2>
        <SendMessageForm open={open} handleClose={handleClose} updateData={updateThreads}/>
        <MessageIcon
          onClick={handleClickOpen}
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
