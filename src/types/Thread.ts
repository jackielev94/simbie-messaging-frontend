import { MessageWithPersonsDto } from "./Message";

export interface ThreadWithMessagesDto {
  id: string;
  created: string;
  messages: Array<MessageWithPersonsDto>
}
