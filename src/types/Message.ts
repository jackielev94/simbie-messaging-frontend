export interface MessagePersonDto {
  id: string;
  nameFirst: string;
  nameLast: string;
}

export interface MessageWithPersonsDto {
  id: string;
  content: string;
  threadId: string;
  created: string;
  read: boolean;
  sender: MessagePersonDto;
  recipient: MessagePersonDto;
}

export type CreateMessageInput = {
  content: string;
  threadId: string | null;
  senderId: string;
  recipientId: string;
  subject: string | null;
}

export type UpdateMessageInput = {
  read: boolean;
}
