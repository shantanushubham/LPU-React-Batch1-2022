import React from "react";
import { useTranslation, Trans } from "react-i18next";

const I18Component = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const index = 11;

  return (
    <div>
      <div>
        <h2>{t("Welcome to React")}</h2>
        <button onClick={(e) => changeLanguage("de")}>German</button>
        <button onClick={(e) => changeLanguage("en")}>English</button>
      </div>
      <div>
        <Trans>To get started, follow me on LinkedIn</Trans>
        <Trans i18nKey={"welcome"}>trans</Trans>
        <Trans>
          {index + 1} <a>---</a>
        </Trans>
      </div>
    </div>
  );
};

export default I18Component;
