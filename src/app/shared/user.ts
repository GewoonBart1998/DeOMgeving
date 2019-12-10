enum UserRole { 
    "Admin", "Medewerker", "Gebruiker" 
}
export class User{
    id: number;
    email: string;
    password: string;
    name: string;
    role: UserRole;
    createDate: Date;
    token: string;
}