import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";
import { useMessages } from "../../dataHooks";


export default function SendMessageForm(props: {open: boolean, handleClose: () => void, threadId?: string, updateData: () => Promise<void>, personId: string}) {
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const { createMessage } = useMessages();

  const handleSend = async () => {
    props.handleClose();
    await createMessage({
      content: message,
      threadId: props.threadId ?? null,
      senderId: props.personId,
      //TODO: get from dropdown
      recipientId: "f40c0b3a-56bb-41ff-a61a-746e55ede257",
      subject: subject.length ? subject : null
    });
    setMessage("");
    setSubject("");
    await props.updateData();
  }
  return (
    <Dialog open={props.open} onClose={props.handleClose} fullWidth={true} maxWidth={'lg'}>
        <DialogTitle>Send message</DialogTitle>
        <DialogContent >
        { !props.threadId ? <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Subject"
          fullWidth
          variant="standard"
          onChange={(e) => setSubject(e.target.value)}
          /> : <div className='empty'></div>
        }
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
