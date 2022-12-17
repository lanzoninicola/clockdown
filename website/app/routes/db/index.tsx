import { json } from "@remix-run/node";
import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import isGodMode from "~/server/utils/is-god-mode";
import { useActionData, useLoaderData, useTransition } from "@remix-run/react";
import Editor from "@monaco-editor/react";
import getFormDataFromRequest from "~/server/utils/get-form-data-from-request.server";
import prismaClient from "prisma/client/prisma-client.server";

interface LoaderData {
  zeus: boolean;
}

export const loader: LoaderFunction = async ({ request }) => {
  const zeus = isGodMode(request);

  return json({
    zeus,
  });
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await getFormDataFromRequest(request);

  if (formData.get("test-db-connection") === true) {
    async function testConnection() {
      try {
        await prismaClient.$queryRaw`SELECT 1`;

        return json(
          { status: 200, message: "Connected to database" },
          { status: 200 }
        );
      } catch (err) {
        return json(
          {
            status: 500,
            message: `Error connecting to database: ${err?.message}`,
          },
          { status: 500 }
        );
      } finally {
        await prismaClient.$disconnect();
      }
    }

    return await testConnection();
  }

  if (formData.get("sql-statement")) {
    console.log("sql-statement");
  }

  return json({ message: "okdfskajçlsadkjflçaskdj" }, { status: 200 });
};

export default function DbIndex() {
  const loaderData: LoaderData = useLoaderData<LoaderData>();
  const { zeus } = loaderData;

  const actionData = useActionData();
  const transition = useTransition();
  const formState = transition.submission
    ? "submitting"
    : actionData?.subscription
    ? "success"
    : actionData?.error
    ? "error"
    : "idle";

  console.log({ actionData, transition });

  if (zeus === false) {
    return (
      <div className="grid h-screen w-screen place-items-center">
        <h1 className="font-body text-xl font-bold text-black">
          Enjoy the silence
        </h1>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-screen flex-col gap-8 p-16 ">
      <form method="post">
        <div className="flex items-center">
          <input
            id="test-db-connection"
            name="test-db-connection"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
            value="true"
            defaultChecked
            hidden
          />
          <label
            htmlFor="checked-checkbox"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            hidden
          >
            Checked state
          </label>
        </div>
        <p>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Test database connection
          </span>
        </p>
        <button
          type="submit"
          className="mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {formState === "submitting" ? "Testing..." : "Test connection"}
        </button>
      </form>
      <form method="post">
        <div className="flex flex-col gap-4">
          <fieldset>
            <label
              htmlFor="sql-statement"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              SQL statement
            </label>
            <textarea
              id="sql-statement"
              name="sql-statement"
              cols={120}
              rows={20}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 font-mono text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="SELECT * FROM users"
            ></textarea>
          </fieldset>
          <button
            type="submit"
            className="mr-2 mb-2 rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
