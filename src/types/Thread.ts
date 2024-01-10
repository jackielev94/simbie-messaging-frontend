import { MessageWithPersonsDto } from "./Message";

export interface ThreadWithMessagesDto {
  id: string;
  created: string;
  subject: string;
  messages: Array<MessageWithPersonsDto>
}
