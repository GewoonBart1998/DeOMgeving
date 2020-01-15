enum userRole {
  GEBRUIKER, ADMIN, MEDEWERKER
}

export class User {
  role: userRole;
  id: number;
  name: string;
  email: string;
  password: string;
}
