import id from "./locales/id.json";
import en from "./locales/en.json";

const dictionaries = { id, en };

export function useTranslation(locale: string) {
  const dict = dictionaries[locale as keyof typeof dictionaries] || id;

  return {
    t: dict,
  };
}