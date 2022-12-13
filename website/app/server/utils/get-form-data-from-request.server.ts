export default async function getFormDataFromRequest(
  req: Request
): Promise<Map<string, any>> {
  const formData = await req.formData();

  const ruleFormData = new Map<string, any>();

  for (const pair of formData.entries()) {
    ruleFormData.set(pair[0], pair[1]);
  }

  return ruleFormData;
}
