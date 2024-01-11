import { mapUnknownToAxiosError } from "../utils";
import { useEffect, useState } from "react";
import axios from "axios";
import { AccountWithPersonDto, LoginSuccess } from "../types";
import { API_URL } from "../constants";

export interface UseLogin {
  loading: boolean;
  account: AccountWithPersonDto;
  login: () => Promise<void>
  reloadAccount: () => Promise<void>
  error: string | undefined;
}

export const useAccount = (email: string, password: string): UseLogin => {
  const [loading, setLoading] = useState<boolean>(false);
  const [account, setAccount] = useState<AccountWithPersonDto>(null);
  const [error, setError] = useState<string | undefined>(undefined);

  const login = async () => {
    setLoading(true);
    try {
      const response = await axios.get<LoginSuccess>(`${API_URL}/authentication/login?email=${email}&password=${password}`);
      console.log("response: ", response)
      setAccount(response.data.account);
      console.log("account: ", account)
    } catch (e) {
      const err = mapUnknownToAxiosError(e);
      setError(err.response?.data.message || "Error fetching account.");
    }
    setLoading(false);
  };

  useEffect(() => {
    login();
  }, [email, password])

  return {
    loading,
    account,
    login,
    reloadAccount: login,
    error,
  };
};
