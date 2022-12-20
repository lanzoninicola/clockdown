import { json } from "@remix-run/node";
import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import isGodMode from "~/server/utils/is-god-mode";
import {
  Form,
  useActionData,
  useLoaderData,
  useTransition,
} from "@remix-run/react";

import getFormDataFromRequest from "~/server/utils/get-form-data-from-request.server";
import prismaClient from "prisma/client/prisma-client.server";
import Editor from "@monaco-editor/react";

interface LoaderData {
  zeus: boolean;
}

type ActionData =
  | undefined
  | {
      status: number;
      message?: string;
      result?: any;
      action: "test-db-connection" | "sql-execution";
    };

export const loader: LoaderFunction = async ({ request }) => {
  const zeus = isGodMode(request);

  return json({
    zeus,
  });
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await getFormDataFromRequest(request);

  async function testConnection() {
    try {
      await prismaClient.$queryRaw`SELECT 1`;

      return json(
        {
          action: "test-db-connection",
          status: 200,
          message: "Connected to database",
        },
        { status: 200 }
      );
    } catch (err) {
      return json(
        {
          action: "test-db-connection",
          status: 500,
          message: `Error connecting to database: ${err?.message}`,
        },
        { status: 500 }
      );
    } finally {
      await prismaClient.$disconnect();
    }
  }

  if (formData["_action"] === "test-db-connection") {
    return testConnection();
  }

  if (formData["_action"] === "sql-execution") {
    const sqlStatement = formData["sql-statement"] as string;

    const sqlNotAllowKeywords = [
      "drop",
      "delete",
      "update",
      "insert",
      "alter",
      "create",
    ];

    // sanitize sql statement
    if (
      sqlNotAllowKeywords.some((keyword) =>
        sqlStatement.toLowerCase().includes(keyword)
      )
    ) {
      return json(
        {
          action: "sql-execution",
          status: 500,
          message: "Statements not allowed",
        },
        { status: 500 }
      );
    }

    try {
      const result = await prismaClient.$queryRawUnsafe(
        `${sqlStatement.trim()}`
      );
      // const result = await prismaClient.$queryRaw`SELECT * FROM users`;

      return json(
        { action: "sql-execution", result: JSON.stringify(result, null, 2) },
        { status: 200 }
      );
    } catch (err) {
      return json(
        {
          action: "sql-execution",
          status: 500,
          message: `Error executing SQL statement: ${err?.message}`,
        },
        { status: 500 }
      );
    } finally {
      await prismaClient.$disconnect();
    }
  }

  return json({ message: "okdfskajçlsadkjflçaskdj" }, { status: 200 });
};

export default function DbIndex() {
  const loaderData: LoaderData = useLoaderData<LoaderData>();
  const { zeus } = loaderData;

  const actionData: ActionData = useActionData();
  const transition = useTransition();
  const testConnectionFormState =
    transition.submission?.formData.get("_action") === "test-db-connection"
      ? "submitting"
      : actionData?.status === 200
      ? "success"
      : actionData?.status >= 400
      ? "error"
      : "idle";

  const sqlExecutionFormState =
    transition.submission?.formData.get("_action") === "sql-execution"
      ? "submitting"
      : actionData?.status === 200
      ? "success"
      : actionData?.status >= 400
      ? "error"
      : "idle";

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
      <Form method="post">
        <p className="text-body text-md mb-2 text-gray-500">
          {testConnectionFormState === "success"
            ? "Connected to database"
            : testConnectionFormState === "error"
            ? actionData?.action === "test-db-connection" && actionData?.message
            : ""}
        </p>
        <button
          type="submit"
          name="_action"
          value="test-db-connection"
          className="mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {testConnectionFormState === "submitting"
            ? "Testing connection..."
            : "Test connection"}
        </button>
      </Form>

      <div data-element="sql-execution-result">
        {sqlExecutionFormState === "error" &&
          actionData?.action === "sql-execution" && (
            <div
              className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
              role="alert"
            >
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline">
                {actionData?.action === "sql-execution" && actionData?.message}
              </span>
            </div>
          )}
        {/* <span className="block sm:inline">
          {actionData?.action === "sql-execution" && actionData?.result}
        </span> */}
        {actionData?.action === "sql-execution" &&
          sqlExecutionFormState !== "error" && (
            <Editor
              height={250}
              defaultLanguage="json"
              defaultValue={actionData?.result}
              theme="vs-dark"
              options={{
                minimap: {
                  enabled: false,
                },
                readOnly: true,
              }}
            />
          )}
      </div>

      <Form method="post">
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
            name="_action"
            value="sql-execution"
            className="mr-2 mb-2 rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            {sqlExecutionFormState === "submitting"
              ? "Executing..."
              : "Execute"}
          </button>
        </div>
      </Form>
    </div>
  );
}
