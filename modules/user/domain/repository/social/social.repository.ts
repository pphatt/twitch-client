export interface ISocialRepository {
  createPost: (
    body: FormData
  ) => Promise<{ data: { data: string } }>
}
