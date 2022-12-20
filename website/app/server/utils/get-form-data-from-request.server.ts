/**
 *
 * @param req the request object
 * @returns a map of the form data or an object depending on the options
 */
export default async function getFormDataFromRequest(
  req: Request
): Promise<{ [k: string]: FormDataEntryValue }> {
  const formData = await req.formData();

  const data: { [k: string]: any } = {};

  for (const [key, value] of formData.entries()) {
    if (value === "true") {
      data[key] = true;
      continue;
    }

    if (value === "false") {
      data[key] = false;
      continue;
    }

    data[key] = value;
  }

  return data;
}
