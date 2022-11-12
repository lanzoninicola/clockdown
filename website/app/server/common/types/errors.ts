export interface ApiError extends Error {
  status: number;
  message: string;
  errors?: any;
}

export type IValidationError = Omit<ApiError, "name">;
