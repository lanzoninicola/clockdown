import ApiError from "./api-error.server";

export default class GenericError extends ApiError {
  constructor() {
    super(500, "Generic Error");
  }
}
