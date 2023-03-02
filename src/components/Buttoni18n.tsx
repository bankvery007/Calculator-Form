import { Button } from "antd";
import i18n from "../i18n";
import { Select, Space } from "antd";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
function Buttoni18n() {
  const [lang, setlang] = React.useState("Thai");
  const { t, i18n } = useTranslation("");
  const optionTH = [
    { value: "th", label: "ไทย" },
    { value: "en", label: "อังกฤษ" },
  ]

  const optionEN = [
    { value: "en", label: "EN" },
    { value: "th", label: "TH" },
  ];

  useEffect(() => {
    if (lang === "en") {
        i18n.changeLanguage("en");
    } else if (lang === "th") {
        i18n.changeLanguage("th");
    }
    }, [lang]);



  return (
    <>
    <div className="button-i18n">
      <Select
        style={{ width: 100 }}
        options={lang === "en" ? optionEN : optionTH}
        onChange={(value) => {
          setlang(value);
        }}
        value={lang}
      />
    </div>
    <div className="button-back">
      <Button href="/">
        {t("back")}
        </Button>
    </div>
    </>
  );
}
export default Buttoni18n;
