export interface IUserRepository {
  // auth
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  login: (body: any) => Promise<void>
  signup: () => Promise<void>
  logout: () => Promise<void>
  forgotPassword: () => Promise<void>
  resetPassword: () => Promise<void>

  // user
  profile: () => Promise<void>
  updateProfile: () => Promise<void>
}
