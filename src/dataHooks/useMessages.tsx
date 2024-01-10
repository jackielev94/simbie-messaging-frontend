import { mapUnknownToAxiosError } from "../utils";
import { useEffect, useState } from "react";
import axios from "axios";
import { CreateMessageInput, MessageWithPersonsDto, UpdateMessageInput } from "../types";
import { API_URL } from "../constants";

export interface UseMessages {
  loading: boolean;
  messages: Array<MessageWithPersonsDto>;
  createMessage: (input: CreateMessageInput) => Promise<void>;
  updateMessage: (input: UpdateMessageInput) => Promise<void>;
  reloadMessages: () => Promise<void>;
  error: string | undefined;
}

export const useMessages = (messageId?: string, threadId?: string): UseMessages => {
  const [loading, setLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<Array<MessageWithPersonsDto>>([]);
  const [error, setError] = useState<string | undefined>(undefined);

  const createMessage = async (input: CreateMessageInput): Promise<void> => {
    setLoading(true);
    try {
      const response = await axios.post<MessageWithPersonsDto>(`${API_URL}/messages`, {
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
      const response = await axios.put<MessageWithPersonsDto>(`${API_URL}/messages/${messageId}`, input);
      setMessages((existingMessages) => existingMessages.map((message) => (message.id === response.data.id ? { ...message, ...response.data } : message)));
    } catch (e) {
      const err = mapUnknownToAxiosError(e);
      setError(err.response?.data.message || "Error updating message.");
    }
  };

  const getMessagesByThreadId = async (): Promise<void> => {
    setLoading(true);
    try {
      const response = await axios.get<Array<MessageWithPersonsDto>>(`${API_URL}/threads/${threadId}/messages`)
      setMessages(response.data);
    } catch (e) {
      const err = mapUnknownToAxiosError(e);
      setError(err.response?.data.message || "Error fetching messages.");
    }
    setLoading(false);
  }

  useEffect(() => {
    if (threadId) {
      getMessagesByThreadId();
    }
  }, []);

  return {
    loading,
    messages,
    createMessage,
    updateMessage,
    reloadMessages: getMessagesByThreadId,
    error,
  };
};
