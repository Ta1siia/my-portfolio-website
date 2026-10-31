import en from "./en";
import fr from "./fr";

export const lang: "en" | "fr" =
  document.documentElement.lang === "fr" ? "fr" : "en";

export const t = lang === "fr" ? fr : en;
