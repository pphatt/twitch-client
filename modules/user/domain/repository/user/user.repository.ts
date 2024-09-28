export interface IUserRepository {
  // auth
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  login: (body: any) => Promise<{
    userId: string
    accessToken: string
    refreshToken: string
  }>
  signup: () => Promise<void>
  logout: () => Promise<void>
  forgotPassword: () => Promise<void>
  resetPassword: () => Promise<void>

  // user
  profile: () => Promise<{ id: string }>
  updateProfile: () => Promise<void>
}
