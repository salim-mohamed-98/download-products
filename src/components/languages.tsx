import React from "react";
import LanguageBtn from "./language-btn";

type Props = {};

export default function Languages({}: Props) {
  return (
    <div className="space-x-1">
      <LanguageBtn locale={"en-GB"} language="english" />
      <LanguageBtn locale={"nl-NL"} language="dutch" />
      <LanguageBtn locale={"fr-FR"} language="france" />
      <LanguageBtn locale={"de-DE"} language="german" />
    </div>
  );
}
