import Thread from "./Thread";
import MessageIcon from '@mui/icons-material/Message';
import { BrowserRouter, Route } from "react-router-dom";
import ThreadPreview from "./ThreadPreview";

const threads = [
  {
    id: "hi",
    messages: [
      {
        content: "hi",
        senderId: "blah",
        recipientId: "bloo",
        created: "12/1/2020"
      }
    ]
  },
  {
    id: "hello",
    messages: [
      {
        content: "hi"
      }
    ]
  },
]

export default function ThreadList() {
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
    {/* <BrowserRouter> */}
      {threads.map((thread) => {
          return (
            // <Route path="threads/:id" element={<Thread messages={thread.messages}/>}>
              <ThreadPreview key={thread.id} thread={thread}/>
            // </Route>
          )
      })}
    {/* </BrowserRouter> */}
    </>
  )
}
