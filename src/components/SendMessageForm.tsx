import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";
import { useMessages } from "../dataHooks";


export default function SendMessageForm(props: {open: boolean, handleClose: () => void, threadId?: string, updateThreads: () => Promise<void>}) {
  const [message, setMessage] = useState("");

  const { createMessage } = useMessages();

  const handleSend = async () => {
    props.handleClose();
    await createMessage({
      content: message,
      threadId: props.threadId ?? null,
      //TODO: get from person
      senderId: "8a2f494f-7c11-4c31-9b9a-b4964af5d178",
      recipientId: "f40c0b3a-56bb-41ff-a61a-746e55ede257"
    });
    await props.updateThreads();
  }
  return (
    <Dialog open={props.open} onClose={props.handleClose} fullWidth={true} maxWidth={'lg'}>
        <DialogTitle>Send message</DialogTitle>
        <DialogContent >
          <TextField
            rows={5}
            autoFocus
            margin="dense"
            id="name"
            label="Message"
            fullWidth
            variant="standard"
            multiline
            onChange={(e) => setMessage(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button onClick={handleSend}>Send</Button>
        </DialogActions>
      </Dialog>
  )
}
