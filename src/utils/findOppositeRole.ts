import { TypeOfAccount } from "../types";

export function findOppositeRole(role: TypeOfAccount): TypeOfAccount {
  return (role === TypeOfAccount.PATIENT ? TypeOfAccount.PROVIDER : TypeOfAccount.PATIENT)
}
