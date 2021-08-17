import React, { useEffect, useState } from "react";
import { getLocaleString } from "utils";

const Date = ({ date }: { date: string }) => {
  const [language, setLanguage] = useState("de-DE");
  const dateParsed =
    (language && getLocaleString(date, "dd.mm.yyyy", language)) || date;

  useEffect(() => {
    setLanguage(navigator.language);
  }, []);

  return <time>{dateParsed}</time>;
};

export default Date;
