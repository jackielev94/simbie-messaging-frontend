import { AccountWithPersonDto } from "./Account";

export interface LoginInput {
  email: string;
  password: string;
}

export interface LoginSuccess {
  success: boolean;
  account: AccountWithPersonDto
}
