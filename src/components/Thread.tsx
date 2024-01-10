import { Button, List } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useLocation } from "react-router-dom";
import { MessageWithPersonsDto } from "../types";
import Message from "./Message"
import { useState } from "react";
import SendMessageForm from "./SendMessageForm";
import { useMessages } from "../dataHooks";

export default function Thread( ) {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // TODO switch to reload messages
  const { messages, reloadMessages } = useMessages(undefined, location.state.threadId);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateMessages = async () => {
    reloadMessages()
  }

  return (
    <>
    <List sx={{ width: '100%', height: 500, overflowY: "scroll", bgcolor: 'background.paper' }}>
      {messages.map((message: MessageWithPersonsDto) => {
        return (
          <Message key={message.id} message={message}/>
        )
      })}
    </List>
    <Button sx={{ width: '100%', height: '4rem' }} variant="contained" endIcon={<SendIcon />} onClick={handleClickOpen}>REPLY</Button>
    <SendMessageForm open={open} handleClose={handleClose} threadId={location.state.threadId} updateData={updateMessages}/>
    </>
  )
}
