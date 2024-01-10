import { useLocation } from "react-router-dom";
import { MessageWithPersonsDto } from "../types";
import Message from "./Message"

export default function Thread( ) {
  const location = useLocation()
  const { messages } = location.state
  return (
    <>
      {messages.map((message: MessageWithPersonsDto) => {
        return (
          <Message key={message.id} message={message}/>
        )
      })}
    </>
  )
}
