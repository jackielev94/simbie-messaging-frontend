import { Button, List } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useLocation } from "react-router-dom";
import { MessageWithPersonsDto } from "../types";
import Message from "./Message"
import { useState } from "react";
import SendMessageForm from "./SendMessageForm";
import { useThreads } from "../dataHooks";

export default function Thread( ) {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // TODO switch to reload messages
  const { reloadThreads } = useThreads('f40c0b3a-56bb-41ff-a61a-746e55ede257');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateThreads = async () => {
    reloadThreads()
  }

  const { thread } = location.state
  return (
    <>
    <List sx={{ width: '100%', height: 500, overflowY: "scroll", bgcolor: 'background.paper' }}>
      {thread.messages.map((message: MessageWithPersonsDto) => {
        return (
          <Message key={message.id} message={message}/>
        )
      })}
    </List>
    <Button sx={{ width: '100%', height: '4rem' }} variant="contained" endIcon={<SendIcon />} onClick={handleClickOpen}>REPLY</Button>
    <SendMessageForm open={open} handleClose={handleClose} threadId={thread.id} updateThreads={updateThreads}/>
    </>
  )
}
