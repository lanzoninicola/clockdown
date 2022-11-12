import type { IValidationError } from "~/server/common/types/errors";

export default class ValidationError implements IValidationError {
  public status = 400;
  public message: string;
  public errors: any;

  constructor(message: string, errors?: any) {
    this.message = message;
    this.errors = errors;
  }
}
