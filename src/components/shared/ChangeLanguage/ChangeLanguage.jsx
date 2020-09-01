import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const ChangeLanguageInner = (props) => {
 const {i18n} = useTranslation()
  return (
    <div className={props.className}>
      <button onClick={() => i18n.changeLanguage(i18n.language === "sk" ? "en" : "sk")} >lang</button>
    </div>
  );
};

export const ChangeLanguage = styled(ChangeLanguageInner)``;
