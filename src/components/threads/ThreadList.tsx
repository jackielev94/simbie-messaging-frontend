import MessageIcon from '@mui/icons-material/Message';
import ThreadPreview from "./ThreadPreview";
import { useThreads } from "../../dataHooks";
import { ThreadWithMessagesDto } from '../../types';
import SendMessageForm from './SendMessageForm';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getLocalStorage } from '../../utils';

export default function ThreadList() {
  const [open, setOpen] = useState(false);

  const location = useLocation();

  const { threads, reloadThreads } = useThreads(location.state?.personId ?? getLocalStorage('personId'))

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
        <SendMessageForm open={open} handleClose={handleClose} updateData={updateThreads} personId={location.state?.personId ?? getLocalStorage('personId')} role={location.state?.role ?? getLocalStorage('role')}/>
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
            <ThreadPreview key={thread.id} thread={thread} personId={location.state?.personId ?? getLocalStorage('personId')} role={location.state?.role ?? getLocalStorage('role')}/>
          )
      })}
    </>
  )
}
