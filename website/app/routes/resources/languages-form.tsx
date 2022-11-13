import { List, ListItem, Button } from "@chakra-ui/react";
import { json } from "@remix-run/node";
import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";
import Teext from "~/client/templates-editor/global/common/layout/teext/teext";
import LANGUAGES from "~/common/i18n/languages/languages";
import { Language } from "~/common/i18n/types";
import {
  commitSession,
  getSession,
} from "~/common/i18n/server/i18n-session.server";

// www.epicweb.dev/full-stack-components#create-the-resource-route
/**
https: interface LoaderData {
  languages: Omit<Language, "context">[];
}

export const loader: LoaderFunction = async ({ request }) => {
  const languages = LANGUAGES.filter(
    (l) =>
      l.context?.find((c) => c === "website" || c === "editor") !== undefined
  ).map((l) => ({
    name: l.name,
    locale: l.locale,
  }));

  return json({
    languages,
  });
};
 */

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const languageSelected = formData.get("lng");

  console.log(languageSelected);

  let session = await getSession(request.headers.get("Cookie"));
  session.set("language", languageSelected);

  return json(
    {},
    {
      headers: {
        "Set-Cookie": await commitSession(session, {
          maxAge: 60 * 60 * 24 * 30, // 30 days, // 1 month
        }),
      },
    }
  );
};

export default function LanguagesForm() {
  // const languagesFetcher = useFetcher<typeof loader>();
  const languageFetcher = useFetcher();

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    languageFetcher.submit(formData, {
      method: "post",
      action: "/resources/languages-form",
    });
  }

  /**
  const lngs = languagesFetcher.data?.languages || [];
  const [languages, setLanguages] = useState<LoaderData["languages"]>(lngs);
  // This effect is needed to fire the loader function
  // and get the languages list
  useEffect(() => {
    languagesFetcher.submit(
      {},
      { method: "get", action: "/resources/languages-form" }
    );

    // if (languagesFetcher.data) {
    //   setLanguages(languagesFetcher.data.languages);
    // }
  }, [languagesFetcher]);
   */

  const languages = [
    {
      name: "English",
      locale: "en",
    },
    {
      name: "Português",
      locale: "pt",
    },
    {
      name: "Español",
      locale: "es",
    },
    {
      name: "Italiano",
      locale: "it",
    },
  ];

  return (
    <List spacing={1}>
      {languages.map((lng, idx) => (
        <ListItem key={idx}>
          <languageFetcher.Form method="post" onSubmit={submit}>
            <input type="text" hidden name="lng" defaultValue={lng.locale} />
            <Button type="submit" variant={"ghost"}>
              <span className="font-body text-sm">{lng.name}</span>
            </Button>
          </languageFetcher.Form>
        </ListItem>
      ))}
    </List>
  );
}
