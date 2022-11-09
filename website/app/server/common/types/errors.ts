export interface ApiError extends Error {
  status: number;
  message: string;
  errors?: any;
}

export interface ValidationError extends ApiError {}
