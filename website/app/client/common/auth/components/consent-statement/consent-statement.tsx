import { Text } from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import React from "react";
import { useTranslation } from "react-i18next";

export default function ConsentStatement() {
  const { t } = useTranslation();

  return (
    <ConsentText>
      {t("onboarding.consentStatement")}
      <Link
        to="/terms-and-policies"
        target={"_blank"}
        className={`hover:text-blue-300`}
      >
        {" "}
        {t("onboarding.consentStatementReadMore")}
      </Link>
    </ConsentText>
  );
}

function ConsentText({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-body text-xs text-gray-600 md:whitespace-pre-line">
      {children}
    </span>
  );
}
