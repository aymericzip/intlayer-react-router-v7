import { type Dictionary, t } from 'intlayer';

const appContent = {
  content: {
    about: t({
      en: 'About',
      es: 'Acerca de',
      fr: 'À propos',
    }),
    home: t({
      en: 'Home',
      es: 'Inicio',
      fr: 'Accueil',
    }),
  },
  key: 'about',
} satisfies Dictionary;

export default appContent;
