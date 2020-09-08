import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { ChangeLanguage } from "../components/shared/ChangeLanguage/ChangeLanguage";
import { Typography } from "@material-ui/core";
import { Layout } from "../components/shared/Layout/Layout";

export const TestPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Typography gutterBottom variant={"h4"}>
        {t("test.title")}
      </Typography>
      <Typography gutterBottom variant={"body1"}>
        <Trans t={t} i18nKey={"test.opisniecoho"}>
          Toto je nejaky specialny opis pravidla
        </Trans>
      </Typography>
    </Layout>
  );
};
