export enum UserRole {
  GEBRUIKER, ADMIN, MEDEWERKER, UNIDENTIFIED
}
export class User {
  id: number;
  email: string;
  role: UserRole;
  accountrole: string;
  name: string;
}
