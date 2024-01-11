import { Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { useState } from "react";
import { useMessages } from "../../dataHooks";
import { useAccounts } from "../../dataHooks/useAccounts";
import { TypeOfAccount } from "../../types";
import { findOppositeRole } from "../../utils";


export default function SendMessageForm(props: {open: boolean, handleClose: () => void, threadId?: string, updateData: () => Promise<void>, personId: string, role: TypeOfAccount, threadRecipient?: string}) {
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [recipient, setRecipient] = useState("");

  const { createMessage } = useMessages();
  const { accounts } = useAccounts(findOppositeRole(props.role));

  const handleSend = async () => {
    props.handleClose();
    await createMessage({
      content: message,
      threadId: props.threadId ?? null,
      senderId: props.personId,
      recipientId: props.threadRecipient ?? recipient,
      subject: subject.length ? subject : null
    });
    setMessage("");
    setSubject("");
    setRecipient("");
    await props.updateData();
  }

  function handleSelect(e: SelectChangeEvent<string>) {
    setRecipient(e.target.value);
  }

  return (
    <Dialog open={props.open} onClose={props.handleClose} fullWidth={true} maxWidth={'lg'}>
        <DialogTitle>Send message</DialogTitle>
        <DialogContent >
        {!props.threadId ?
        <>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Subject"
            fullWidth
            variant="standard"
            onChange={(e) => setSubject(e.target.value)}
            />
          <Select
            labelId="select-label"
            id="select"
            value={recipient}
            label="Recipient"
            onChange={handleSelect}
            sx={{
              width: '20%',
            }}
          >
            {accounts.map((account) => {
              return (
                <MenuItem key={account.personId} value={account.personId}>{account.nameFirst} {account.nameLast}</MenuItem>
              )
            })}
          </Select>
        </> :
        <div className='empty'></div>}
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
