import type { ValidationError } from "./errors";

/** T define the data to validate and given to the validate() method */
export interface Validator<T> {
  validate: (data: T) => Promise<ValidationError | void>;
}

export interface BaseRepository {
  create: (data: any) => Promise<any>;
  findAll: (id: number) => Promise<any>;
  findById: (id: number) => Promise<any>;
  update: (id: number, data: any) => Promise<any>;
  delete: (id: number) => Promise<any>;
}
