import React, {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Language } from '../types/language';

interface useTranslationActions {
  translationData: Language | undefined;
}

type SupportedLanguage = 'english' | 'french';

const TranslationContext = createContext({} as useTranslationActions);

const TranslationProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [translationData, setTranslationData] = useState<undefined | Language>(
    undefined
  );

  const getCorrectLanguage = (): SupportedLanguage => {
    const userLocale =
      navigator.languages && navigator.languages.length
        ? navigator.languages[0]
        : navigator.language;

    if (userLocale === 'fr') {
      return 'french';
    }

    return 'english';
  };

  const importCorrectLanguageData = async (language: SupportedLanguage) => {
    const mod = await import('../language/' + language);
    setTranslationData(mod.Data);
  };

  useEffect(() => {
    if (translationData === undefined) {
      (async () => {
        const language = await getCorrectLanguage();
        await importCorrectLanguageData(language);
      })();
    }
  }, []);

  return (
    <TranslationContext.Provider value={{ translationData }}>
      {children}
    </TranslationContext.Provider>
  );
};

const useTranslation = () => {
  const context = useContext(TranslationContext);

  if (!context) {
    throw new Error(
      'useTranslation must be placed within a TranslationProvider'
    );
  }

  return context.translationData;
};

export default TranslationProvider;
export { useTranslation };
