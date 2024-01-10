import { AxiosError } from "axios";

export const mapUnknownToAxiosError = (error: unknown): AxiosError<{ message?: string }> => {
  if (error instanceof AxiosError) {
    return error;
  } else if ("string" === typeof error) {
    return new AxiosError(error);
  }

  return new AxiosError("Unknown error.");
};
