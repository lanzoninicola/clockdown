export default class ApiError extends Error {
  get status() {
    return this._statusCode;
  }

  get message() {
    return this._message;
  }

  get isOperational() {
    return this._isOperational;
  }

  get stack() {
    return this._stack;
  }

  constructor(
    private _statusCode: number,
    private _message: string,
    private _isOperational = true,
    private _stack = ""
  ) {
    super(_message);
    if (_stack) {
      this._stack = _stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
