export interface Role {
    id: number;
    name: string;
  }

  export interface User {
    emailAddress: string;
    password: string;
    name: string;
    roleId: number;
    nationalId: number;
  }