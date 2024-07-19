import React, { useState } from 'react';
import Select from 'react-select';
import { FaFilter, FaSearch } from 'react-icons/fa'; 
import { useTranslation } from 'react-i18next';
import MangaCard from './MangaCard';
import './AllMangas.css';

function AllMangas() {
    const { t, i18n } = useTranslation();
    const [showFilters, setShowFilters] = useState(false);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedYear, setSelectedYear] = useState([]);
    const [selectedMainCast, setSelectedMainCast] = useState([]);
    const [selectedTraits, setSelectedTraits] = useState([]);
    const [selectedDemographics, setSelectedDemographics] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const genresOptions = [
        { value: 'action', label: 'Action' },
        { value: 'adventure', label: 'Adventure' },
        { value: 'comedy', label: 'Comedy' },
        { value: 'drama', label: 'Drama' }
    ];

    const yearOptions = Array.from({ length: 35 }, (v, k) => ({ value: 1990 + k, label: 1990 + k }));

    const castOptions = [
        { value: 'female_lead', label: 'Female Lead' },
        { value: 'male_lead', label: 'Male Lead' },
        { value: 'ensemble', label: 'Ensemble' }
    ];

    const traitsOptions = [
        { value: 'villains', label: 'Villains' },
        { value: 'magic', label: 'Magic' },
        { value: 'school_life', label: 'School Life' }
    ];

    const demographicOptions = [
        { value: 'shonen', label: 'Shonen' },
        { value: 'seinen', label: 'Seinen' },
        { value: 'josei', label: 'Josei' },
        { value: 'shoujo', label: 'Shoujo' }
    ];

    const mangas = [
        { id: 1, title: 'Demon Slayer', episodes: '24', type: 'Anime', genre: 'Action', year: 2019, mainCast: 'male_lead', traits: ['magic'], demographic: 'shonen', trailer: 'https://www.youtube.com/embed/VQGCKyvzIM4', className: 'demon-slayer' },
        { id: 2, title: 'Jujutsu Kaisen', episodes: '12', type: 'Manga', genre: 'Fantasy', year: 2020, mainCast: 'male_lead', traits: ['villains', 'magic'], demographic: 'shonen', trailer: 'https://www.youtube.com/embed/pkKu9hLT-t8', className: 'jujutsu-kaisen' },
        { id: 3, title: 'Code Geass', episodes: '24', type: 'Anime', genre: 'Mecha', year: 2006, mainCast: 'ensemble', traits: ['villains'], demographic: 'shonen', trailer: 'https://www.youtube.com/embed/v-AGjx0N24U', className: 'code-geass' },
        { id: 4, title: 'Death Note', episodes: '12', type: 'Manga', genre: 'Thriller', year: 2003, mainCast: 'male_lead', traits: ['villains'], demographic: 'shonen', trailer: 'https://www.youtube.com/embed/NlJZ-YgAt-c', className: 'death-note' },
        { id: 5, title: 'One Piece', episodes: '24', type: 'Anime', genre: 'Adventure', year: 1999, mainCast: 'male_lead', traits: ['school_life'], demographic: 'shonen', trailer: 'https://www.youtube.com/embed/S8_YwFLCh4U', className: 'one-piece' },
        { id: 6, title: 'Naruto', episodes: '220', type: 'Anime', genre: 'Action', year: 2002, mainCast: 'ensemble', traits: ['magic'], demographic: 'shonen', trailer: 'https://www.youtube.com/embed/-G9BqkgZXRA', className: 'naruto' },
        { id: 7, title: 'My Hero Academia', episodes: '25', type: 'Anime', genre: 'Superhero', year: 2016, mainCast: 'ensemble', traits: ['villains'], demographic: 'shonen', trailer: 'https://www.youtube.com/embed/T5HMoxJRhRY', className: 'my-hero-academia' },
        { id: 8, title: 'Attack on Titan', episodes: '25', type: 'Anime', genre: 'Dark Fantasy', year: 2013, mainCast: 'ensemble', traits: ['villains'], demographic: 'seinen', trailer: 'https://www.youtube.com/embed/MGRm4IzK1SQ', className: 'attack-on-titan' },
        { id: 9, title: 'Tokyo Ghoul', episodes: '12', type: 'Anime', genre: 'Horror', year: 2014, mainCast: 'male_lead', traits: ['villains'], demographic: 'seinen', trailer: 'https://www.youtube.com/embed/vGuQeQsoRgU', className: 'tokyo-ghoul' },
        { id: 10, title: 'Fullmetal Alchemist: Brotherhood', episodes: '64', type: 'Anime', genre: 'Adventure', year: 2009, mainCast: 'ensemble', traits: ['magic'], demographic: 'shonen', trailer: 'https://www.youtube.com/embed/-GoNo0DGroU', className: 'fullmetal-alchemist' },
        { id: 11, title: 'Sword Art Online', episodes: '25', type: 'Anime', genre: 'Science Fiction', year: 2012, mainCast: 'male_lead', traits: ['school_life'], demographic: 'shonen', trailer: 'https://www.youtube.com/embed/6ohYYtxfDCg', className: 'sword-art-online' },
        { id: 12, title: 'Bleach', episodes: '366', type: 'Anime', genre: 'Action', year: 2004, mainCast: 'male_lead', traits: ['villains'], demographic: 'shonen', trailer: 'https://www.youtube.com/embed/78WIYzX_m98', className: 'bleach' },
        { id: 13, title: 'One Punch Man', episodes: '12', type: 'Anime', genre: 'Comedy', year: 2015, mainCast: 'male_lead', traits: ['villains'], demographic: 'seinen', trailer: 'https://www.youtube.com/embed/Poo5lqoWSGw', className: 'one-punch-man' },
    ];

    const filterMangas = () => {
        return mangas.filter(manga => {
            const matchGenres = selectedGenres.length === 0 || selectedGenres.some(genre => genre.value === manga.genre.toLowerCase());
            const matchYear = selectedYear.length === 0 || selectedYear.some(year => year.value === manga.year);
            const matchMainCast = selectedMainCast.length === 0 || selectedMainCast.some(cast => cast.value === manga.mainCast);
            const matchTraits = selectedTraits.length === 0 || selectedTraits.some(trait => manga.traits.includes(trait.value));
            const matchDemographic = selectedDemographics.length === 0 || selectedDemographics.some(demo => demo.value === manga.demographic);
            const matchSearchQuery = searchQuery === '' || manga.title.toLowerCase().includes(searchQuery.toLowerCase());
            return matchGenres && matchYear && matchMainCast && matchTraits && matchDemographic && matchSearchQuery;
        });
    };

    return (
        <div className="all-mangas-container">
            <h1 className="page-title">{t("All Mangas")}</h1> {/* Page Title */}
            <div className="search-and-filter" role="search">
                <label htmlFor="search-input" className="sr-only">{t("Search")}</label>
                <input
                    id="search-input"
                    type="text"
                    placeholder={t("Search")}
                    className="search-input"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    aria-label={t("Search")}
                />
                <button className="search-button" aria-label={t("Search")}>
                    <FaSearch />
                </button>
                <button onClick={() => setShowFilters(!showFilters)} className="filter-button" aria-expanded={showFilters} aria-controls="filter-drawer">
                    <FaFilter />
                </button>
            </div>
            {showFilters && (
                <div id="filter-drawer" className="filter-drawer" role="region" aria-labelledby="filter-button">
                    <div className="filter-section">
                        <h4 id="genres-label">{t("Genres")}</h4>
                        <Select
                            options={genresOptions}
                            isMulti
                            className="select"
                            onChange={setSelectedGenres}
                            value={selectedGenres}
                            aria-labelledby="genres-label"
                        />
                        <h4 id="year-label">{t("Year")}</h4>
                        <Select
                            options={yearOptions}
                            isMulti
                            className="select"
                            onChange={setSelectedYear}
                            value={selectedYear}
                            aria-labelledby="year-label"
                        />
                        <h4 id="main-cast-label">{t("Main Cast")}</h4>
                        <Select
                            options={castOptions}
                            isMulti
                            className="select"
                            onChange={setSelectedMainCast}
                            value={selectedMainCast}
                            aria-labelledby="main-cast-label"
                        />
                        <h4 id="traits-label">{t("Traits")}</h4>
                        <Select
                            options={traitsOptions}
                            isMulti
                            className="select"
                            onChange={setSelectedTraits}
                            value={selectedTraits}
                            aria-labelledby="traits-label"
                        />
                        <h4 id="demographic-label">{t("Demographic")}</h4>
                        <Select
                            options={demographicOptions}
                            isMulti
                            className="select"
                            onChange={setSelectedDemographics}
                            value={selectedDemographics}
                            aria-labelledby="demographic-label"
                        />
                    </div>
                </div>
            )}
            <div className="manga-grid" role="grid">
                {filterMangas().map(manga => (
                    <MangaCard key={manga.id} manga={manga} />
                ))}
            </div>
        </div>
    );
}

export default AllMangas;
