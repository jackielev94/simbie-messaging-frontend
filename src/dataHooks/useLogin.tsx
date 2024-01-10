import { mapUnknownToAxiosError } from "../utils";
import { useState } from "react";
import axios from "axios";
import { AccountWithPersonDto, LoginInput, LoginSuccess } from "../types";

export interface UseLogin {
  loading: boolean;
  account?: AccountWithPersonDto;
  login: (input: LoginInput) => Promise<void>
  // reloadAccount: () => Promise<void>
  error: string | undefined;
}

export const useAccount = (): UseLogin => {
  const [loading, setLoading] = useState<boolean>(false);
  const [account, setAccount] = useState<AccountWithPersonDto>();
  const [error, setError] = useState<string | undefined>(undefined);

  const login = async (input: LoginInput): Promise<void> => {
    setLoading(true);
    try {
      const response = await axios.get<LoginSuccess>(`http://localhost:3000/authentication/login?email=${input.email}&password=${input.password}`);
      setAccount(response.data.account);
      console.log("account: ", account)
    } catch (e) {
      const err = mapUnknownToAxiosError(e);
      setError(err.response?.data.message || "Error fetching account.");
    }
    setLoading(false);
  };

  return {
    loading,
    account,
    login,
    // reloadAccount: login,
    error,
  };
};
