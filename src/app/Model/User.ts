export interface Role {
    id: number;
    name: string;
  }

  export interface User {
    id?:string;
    emailAddress: string;
    password: string;
    name: string;
    roleId: number;
    nationalId: number;
  }