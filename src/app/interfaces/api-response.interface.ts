export interface ApiResponse<T> {
  error: string | null,
  body: T,
}
