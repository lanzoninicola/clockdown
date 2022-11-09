import type { ValidationError } from "./errors";

/** T define the data to validate and given to the validate() method */
export interface Validator<T> {
  validate: (data: T) => Promise<ValidationError | void>;
}

export interface BaseRepository {
  create: (data: any) => Promise<any>;
  findAll: (id: string) => Promise<any>;
  findById: (id: string) => Promise<any>;
  update: (id: string, data: any) => Promise<any>;
  delete: (id: string) => Promise<any>;
}
