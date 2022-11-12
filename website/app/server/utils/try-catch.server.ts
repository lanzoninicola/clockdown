import { json } from "@remix-run/node";
import GenericError from "../common/errors/generic-error.server";

export default async function tryCatch(
  fn: (...args: any[]) => any,
  ...args: any[]
): Promise<any> {
  try {
    return await fn(...args);
  } catch (error: Error | any) {
    const genericError = new GenericError();

    const status = error?.status || genericError.status;
    const message = error?.message || genericError.message;

    return json({ status, message }, { status });
  }
}
