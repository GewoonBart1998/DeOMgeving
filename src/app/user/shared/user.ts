enum userRole {
  GEBRUIKER, ADMIN, MEDEWERKER
}
export class User {
  id: number;
  email: string;
  role: userRole;
  accountrole: string;
  name: string;
}
