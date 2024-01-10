import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import * as React from "react";
import { MessageWithPersonsDto } from "../types";
import convertDate from "../utils/dates";

export default function Message(props: { message: MessageWithPersonsDto }) {
  return (
    <>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
          <Avatar alt={props.message.sender.nameFirst.slice(0, 1).toUpperCase()} src="/" />
      </ListItemAvatar>
      <ListItemText
        // primary={props.message.subject}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'flex' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {props.message.sender.nameFirst}
            </Typography>
            <Typography>
             {props.message.content}
            </Typography>
            <Typography variant="caption">
             {convertDate(props.message.created)}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
    <Divider variant="inset" component="li" />
    </>
  )
}
