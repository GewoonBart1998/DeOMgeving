enum userRole {
  GEBRUIKER, ADMIN
}

export class User {
  role: userRole;
  id: number;
  name: string;
  email: string;
  password: string;
}
