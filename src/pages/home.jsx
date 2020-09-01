import React from "react";
import { useTranslation } from "react-i18next";
import { ChangeLanguage } from "../components/shared/ChangeLanguage/ChangeLanguage";
import { Layout } from "../components/shared/Layout/Layout";

export const HomePage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <h1>{t("heading")}</h1>
      <ChangeLanguage />
    </Layout>
  );
};
