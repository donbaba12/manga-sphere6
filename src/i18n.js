import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "Home": "Home",
            "All Mangas": "All Mangas",
            "Trends": "Trends",
            "Forum": "Forum",
            "My List": "My List",
            "Search": "Search",
            "Genres": "Genres",
            "Year": "Year",
            "Main Cast": "Main Cast",
            "Traits": "Traits",
            "Demographic": "Demographic",
            "Watch Trailer": "Watch Trailer",
            "Add to List": "Add to List",
            "episodes": "episodes",
            "Type": "Type",
            "Close": "Close"
        }
    },
    fr: {
        translation: {
            "Home": "Accueil",
            "All Mangas": "Tous les mangas",
            "Trends": "Tendances",
            "Forum": "Forum",
            "My List": "Ma liste",
            "Search": "Rechercher",
            "Genres": "Genres",
            "Year": "Année",
            "Main Cast": "Acteurs principaux",
            "Traits": "Traits",
            "Demographic": "Démographique",
            "Watch Trailer": "Regarder la bande-annonce",
            "Add to List": "Ajouter à la liste",
            "episodes": "épisodes",
            "Type": "Type",
            "Close": "Fermer"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // default language
        fallbackLng: 'en', // fallback language
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
