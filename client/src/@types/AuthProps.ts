type AuthProps = {
  authenticated: boolean;
  loading: boolean;
  signin(email: string, password: string): Promise<any>;
  signup(email: string, password: string, username: string): Promise<any>;
  signout(): void;
};

export default AuthProps;
