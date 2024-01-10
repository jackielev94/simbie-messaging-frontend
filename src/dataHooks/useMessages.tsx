import { mapUnknownToAxiosError } from "../utils";
import { useState } from "react";
import axios from "axios";
import { CreateMessageInput, MessageWithPersonsDto, UpdateMessageInput } from "../types";

export interface UseMessages {
  loading: boolean;
  messages: Array<MessageWithPersonsDto>;
  createMessage: (input: CreateMessageInput) => Promise<void>;
  updateMessage: (input: UpdateMessageInput) => Promise<void>;
  error: string | undefined;
}

export const useMessages = (messageId?: string): UseMessages => {
  const [loading, setLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<Array<MessageWithPersonsDto>>([]);
  const [error, setError] = useState<string | undefined>(undefined);

  const createMessage = async (input: CreateMessageInput): Promise<void> => {
    setLoading(true);
    try {
      const response = await axios.post<MessageWithPersonsDto>("http://localhost:3000/messages", {
        ...input,
      });
      setMessages((existingMessages) => [...existingMessages, response.data]);
    } catch (e) {
      const err = mapUnknownToAxiosError(e);
      setError(err.response?.data.message || "Error creating message.");
    }
  };

  const updateMessage = async (input: UpdateMessageInput): Promise<void> => {
    setLoading(true);
    try {
      const response = await axios.put<MessageWithPersonsDto>(`http://localhost:3000/messages/${messageId}`, input);
      setMessages((existingMessages) => existingMessages.map((message) => (message.id === response.data.id ? { ...message, ...response.data } : message)));
    } catch (e) {
      const err = mapUnknownToAxiosError(e);
      setError(err.response?.data.message || "Error updating message.");
    }
  };

  return {
    loading,
    messages,
    createMessage,
    updateMessage,
    error,
  };
};
