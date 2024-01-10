import { mapUnknownToAxiosError } from "../utils";
import { useEffect, useState } from "react";
import axios from "axios";
import { ThreadWithMessagesDto } from "../types";
import { API_URL } from "../constants";

export interface UseThreads {
  loading: boolean;
  threads: Array<ThreadWithMessagesDto>;
  reloadThreads: () => Promise<void>;
  error: string | undefined;
}

export const useThreads = (personId: string): UseThreads => {
  const [loading, setLoading] = useState<boolean>(false);
  const [threads, setThreads] = useState<Array<ThreadWithMessagesDto>>([]);
  const [error, setError] = useState<string | undefined>(undefined);

  const getThreadsByPersonId = async (): Promise<void> => {
    setLoading(true);
    try {
      const response = await axios.get<Array<ThreadWithMessagesDto>>(`${API_URL}/persons/${personId}/threads`)
      setThreads(response.data);
    } catch (e) {
      const err = mapUnknownToAxiosError(e);
      setError(err.response?.data.message || "Error fetching threads.");
    }
    setLoading(false);
  };

  useEffect(() => {
    if (personId) {
      getThreadsByPersonId();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    threads,
    reloadThreads: getThreadsByPersonId,
    error,
  };
};
