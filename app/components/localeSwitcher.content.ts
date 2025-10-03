import { type Dictionary, t } from 'intlayer';

const localeSwitcherContent = {
  content: {
    languageListLabel: t({
      en: 'Language list',
      es: 'Lista de idiomas',
      fr: 'Liste de langues',
    }),
    localeSwitcherLabel: t({
      en: 'Select language',
      es: 'Seleccionar idioma',
      fr: 'Sélectionner la langue',
    }),
  },
  key: 'locale-switcher',
} satisfies Dictionary;

export default localeSwitcherContent;
