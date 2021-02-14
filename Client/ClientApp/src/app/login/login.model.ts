export interface UserLogin {
  username: string,
  password: string
}

export interface UserRegister extends UserLogin {
  id: string,
  email: string
}