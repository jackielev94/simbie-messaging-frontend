import { mapUnknownToAxiosError } from "../utils";
import { useEffect, useState } from "react";
import axios from "axios";
import { AccountWithPersonDto, TypeOfAccount } from "../types";
import { API_URL } from "../constants";

export interface UseAccounts {
  loading: boolean;
  accounts: Array<AccountWithPersonDto>;
  reloadAccounts: () => Promise<void>;
  error: string | undefined;
}

export const useAccounts = (role: TypeOfAccount): UseAccounts => {
  const [loading, setLoading] = useState<boolean>(false);
  const [accounts, setAccounts] = useState<Array<AccountWithPersonDto>>([]);
  const [error, setError] = useState<string | undefined>(undefined);

  const getAccountsByRole = async (): Promise<void> => {
    setLoading(true);
    try {
      const response = await axios.get<Array<AccountWithPersonDto>>(`${API_URL}/accounts?role=${role}`)
      setAccounts(response.data);
    } catch (e) {
      const err = mapUnknownToAxiosError(e);
      setError(err.response?.data.message || "Error fetching Accounts.");
    }
    setLoading(false);
  }

  useEffect(() => {
    if (role) {
      getAccountsByRole();
    }
  }, []);

  return {
    loading,
    accounts,
    reloadAccounts: getAccountsByRole,
    error,
  };
};
