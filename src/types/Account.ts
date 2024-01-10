
export enum TypeOfAccount {
  PATIENT = 'PATIENT',
  PROVIDER = 'PROVIDER'
}

export interface AccountWithPersonDto {
  accountId: string;
  personId: string;
  email: string;
  nameFirst: string;
  nameLast: string;
  phone: string;
  role: TypeOfAccount
}
