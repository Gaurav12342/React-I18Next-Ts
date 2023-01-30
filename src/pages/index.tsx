import { FC } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const Root: FC = () => {
  const { t } = useTranslation();
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18next.changeLanguage(event?.target?.value);
  };
  return (
    <div>
      <h1>{t("welcome")}</h1>

      <select name={"language"} onChange={handleChange}>
        <option value={"en"}>{"English"}</option>
        <option value={"fr"}>{"Franch"}</option>
      </select>
    </div>
  );
};

export default Root;
