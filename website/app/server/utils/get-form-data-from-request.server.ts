/**
 *
 * @param req the request object
 * @returns a map of the form data
 */
export default async function getFormDataFromRequest(
  req: Request
): Promise<Map<string, any>> {
  const formData = await req.formData();

  const ruleFormData = new Map<string, any>();

  for (const pair of formData.entries()) {
    if (pair[1] === "true") {
      ruleFormData.set(pair[0], true);
      continue;
    }

    if (pair[1] === "false") {
      ruleFormData.set(pair[0], false);
      continue;
    }

    if (pair[1] === "null") {
      ruleFormData.set(pair[0], null);
      continue;
    }

    if (pair[1] === "undefined") {
      ruleFormData.set(pair[0], undefined);
      continue;
    }

    ruleFormData.set(pair[0], pair[1]);
  }

  return ruleFormData;
}
