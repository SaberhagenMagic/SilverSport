export interface User {
  username: string;
  aplication: number;
  key$?: string;
}

export interface SysUser {
  username?: string;
  email: string;
  pwd: string;
  perfil?: number;
  key$?: string;
}
