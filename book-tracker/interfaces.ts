export interface IAuthContext {
  token: string | null;
  userId: string | null;
  login(jwtToken: string, id: string): void;
  isAuth: boolean;
}
