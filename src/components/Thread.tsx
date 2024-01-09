import { useParams } from "react-router-dom";
import Message from "./Message"

const dummyMessages = [
  {
    content: "hi",
    senderId: "blah",
    recipientId: "bloo",
    created: "12/1/2020"
  },
  {
    content: "hello",
    senderId: "blah",
    recipientId: "bloo",
    created: "12/1/2020"
  }
]
export default function Thread( ) {
  // use this later to get messages
  // const { id } = useParams();
  return (
    <>
      {dummyMessages.map(message => {
        return (
          <Message message={message}/>
        )
      })}
    </>
  )
}
