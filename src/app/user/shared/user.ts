enum userRole {
  GEBRUIKER, ADMIN
}
export class User {
  id: number;
  email: string;
  // role: userRole;
  name: string;
  role: string;
}
