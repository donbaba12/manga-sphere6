import React, { useState } from 'react';
import Select from 'react-select';
import { FaFilter, FaSearch } from 'react-icons/fa'; 
import MangaCard from './MangaCard';
import './AllMangas.css';

function AllMangas() {
    const [showFilters, setShowFilters] = useState(false);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedYear, setSelectedYear] = useState([]);
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
        { id: 1, title: 'Demon Slayer', episodes: '24', type: 'Anime', trailerLink: '#', image: './DS.png' },
        { id: 2, title: 'Jujutsu Kaisen', episodes: '12', type: 'Manga', trailerLink: '#', image: './DS.png' },
        { id: 3, title: 'Demon Slayer', episodes: '24', type: 'Anime', trailerLink: '#' , image: './DS.png'},
        { id: 4, title: 'Jujutsu Kaisen', episodes: '12', type: 'Manga', trailerLink: '#', image: './DS.png' },
        { id: 5, title: 'Demon Slayer', episodes: '24', type: 'Anime', trailerLink: '#', image: './DS.png' },
        { id: 6, title: 'Jujutsu Kaisen', episodes: '12', type: 'Manga', trailerLink: '#', image: './DS.png' },
        { id: 7, title: 'Demon Slayer', episodes: '24', type: 'Anime', trailerLink: '#', image: './DS.png' },
        { id: 8, title: 'Jujutsu Kaisen', episodes: '12', type: 'Manga', trailerLink: '#', image: './DS.png' },
        { id: 8, title: 'Demon Slayer', episodes: '24', type: 'Anime', trailerLink: '#', image: './DS.png' },
        { id: 10, title: 'Jujutsu Kaisen', episodes: '12', type: 'Manga', trailerLink: '#', image: './DS.png' },
        { id: 11, title: 'Demon Slayer', episodes: '24', type: 'Anime', trailerLink: '#' , image: './DS.png'},
        { id: 12, title: 'Jujutsu Kaisen', episodes: '12', type: 'Manga', trailerLink: '#', image: './DS.png' },
       
    ];
    return (
        <div className="all-mangas-container">
            
            <div className="search-and-filter">
                <input
                    type="text"
                    placeholder="Search"
                    className="search-input"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
                <button className="search-button">
                    <FaSearch />
                </button>
                <button onClick={() => setShowFilters(!showFilters)} className="filter-button">
                    <FaFilter />
                </button>
                
            </div>
            {showFilters && (
                <div className="filter-drawer">
                    <div className="filter-section">
                        <h4>Genres</h4>
                        <Select
                            options={genresOptions}
                            isMulti
                            className="select"
                            onChange={setSelectedGenres}
                            value={selectedGenres}
                        />
                        <h4>Year</h4>
                        <Select
                            options={yearOptions}
                            isMulti
                            className="select"
                            onChange={setSelectedYear}
                            value={selectedYear}
                        />
                        <h4>Main Cast</h4>
                        <Select
                            options={castOptions}
                            isMulti
                            className="select"
                            onChange={setSelectedGenres} // Update the handler accordingly
                            value={selectedGenres}
                        />
                        <h4>Traits</h4>
                        <Select
                            options={traitsOptions}
                            isMulti
                            className="select"
                            onChange={setSelectedGenres} // Update the handler accordingly
                            value={selectedGenres}
                        />
                        <h4>Demographic</h4>
                        <Select
                            options={demographicOptions}
                            isMulti
                            className="select"
                            onChange={setSelectedGenres} // Update the handler accordingly
                            value={selectedGenres}
                        />
                        
                    </div>
                </div>
            )}
            <div className="manga-grid">
            {mangas.map(manga => (
                <MangaCard key={manga.id} manga={manga} />
            ))}
            </div>
            
        </div>
        
    );
}

export default AllMangas;
