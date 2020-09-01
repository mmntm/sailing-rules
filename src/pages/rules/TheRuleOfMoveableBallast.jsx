import React from "react";
import { Layout } from "../../components/shared/Layout/Layout";
import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";

export const TheRuleOfMoveableBallastPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Typography gutterBottom variant={"h4"}>{t('rules.TheRuleOfMoveableBallast.name')}</Typography>
      <Typography variant={"body1"}>{t('rules.TheRuleOfMoveableBallast.text')}</Typography>
    </Layout>
  );
};
