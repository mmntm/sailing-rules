import React from "react";
import { Layout } from "../components/shared/Layout/Layout";
import { Typography } from "@material-ui/core";
import { useTranslation, Trans } from "react-i18next";
import { PreviewLink } from "../components/shared/PreviewLink/PreviewLink";
import { RuleRoutes } from "../components/shared/SideList/SideList";

export const IntroductionPage = () => {
  const { t } = useTranslation();
  const appName = t("name");
  return (
    <Layout>
      <Typography gutterBottom variant={"h4"}>
        {t("introduction.title")}
      </Typography>
      <Typography gutterBottom variant={"body1"}>
        <Trans t={t} i18nKey={"introduction.firstParagraph"}>
          <strong>{{ appName }}</strong> obsahuje dve hlavné sekcie. Prvá (časti
          1-7) zahŕňa pravidlá vzťahujúce sa na všetkých závodníkov. Druhá
          (dodatky), zahŕňa detaily pravidiel, pravidlá vzťahujúce sa na
          špeciálne typy závodenia a pravidlá ovplyvňujúce len mály počet
          pretekárov.
        </Trans>
      </Typography>
      <Typography variant={"body1"}>
        <Trans t={t} i18nKey={"introduction.testRule"}>
          Testovacie pravidlo <PreviewLink to={RuleRoutes.TheRuleOfMoveableBallast.link} previewText={t('rules.TheRuleOfMoveableBallast.previewLinkText')}>pohyblyvej zatazi</PreviewLink>, ktore tu
          je cisto len na znazornenie prelinku
        </Trans>
      </Typography>
    </Layout>
  );
};
