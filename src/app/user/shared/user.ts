enum userRole {
  GEBRUIKER, ADMIN, MEDEWERKER
}
export class User {
  id: number;
  email: string;
  role: userRole;
  name: string;
}
