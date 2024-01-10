export interface MessageWithPersonsDto {
  id: string;
  content: string;
  threadId: string;
  created: string;
  read: boolean;
  senderId: string;
  recipientId: string;
}

export type CreateMessageInput = {
  content: string;
  threadId?: string;
  senderId: string;
  recipientId: string;
}

export type UpdateMessageInput = {
  read: boolean;
}
