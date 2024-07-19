import React, { useState } from 'react';
import Select from 'react-select';
import './Trends.css';

function Trends() {
    const mangaTrends = [
        { year: 2023, mangas: [
            { id: 1, title: "Demon Slayer", description: "Demon", image: '/images/CG.png', className: 'demon-slayer' },
            { id: 2, title: "Jujutsu Kaisen", description: "Fléaux", image: '/images/CG.png', className: 'jujutsu-kaisen' },
            { id: 3, title: "One Piece", description: "Pirate", image: '/images/CG.png', className: 'one-piece' },
        ]},
        { year: 2022, mangas: [
            { id: 4, title: "Code Geass", description: "Power", image: '/images/CG.png', className: 'code-geass' },
            { id: 5, title: "Death Note", description: "Demon", image: '/images/DN.png', className: 'death-note' },
            { id: 6, title: "One Piece", description: "Pirates", image: '/images/one-piece.png', className: 'one-piece' },
        ]},
        { year: 2021, mangas: [
            { id: 7, title: "Full Metal Alchemist", description: "Power", image: '/images/CG.png', className: 'fm' },
            { id: 8, title: "Bleach", description: "Demon", image: '/images/DN.png', className: 'b' },
            { id: 9, title: "One Piece", description: "Pirates", image: '/images/one-piece.png', className: 'one-piece' },
        ]},
        { year: 2020, mangas: [
            { id: 10, title: "Code Geass", description: "Power", image: '/images/CG.png', className: 'code-geass' },
            { id: 11, title: "Death Note", description: "Demon", image: '/images/DN.png', className: 'death-note' },
            { id: 12, title: "One Piece", description: "Pirates", image: '/images/one-piece.png', className: 'one-piece' },
        ]},
        { year: 2019, mangas: [
            { id: 13, title: "Code Geass", description: "Power", image: '/images/CG.png', className: 'code-geass' },
            { id: 14, title: "Death Note", description: "Demon", image: '/images/DN.png', className: 'death-note' },
            { id: 15, title: "One Piece", description: "Pirates", image: '/images/one-piece.png', className: 'one-piece' },
        ]},
        { year: 2018, mangas: [
            { id: 16, title: "Naruto", description: "Power", image: '/images/CG.png', className: 'naruto' },
            { id: 17, title: "Death Note", description: "Demon", image: '/images/DN.png', className: 'death-note' },
            { id: 18, title: "One punch man", description: "Pirates", image: '/images/one-piece.png', className: 'one-punch' },
        ]},
    ];

    const [selectedYears, setSelectedYears] = useState([]);

    const yearOptions = mangaTrends.map(yearData => ({ value: yearData.year, label: yearData.year.toString() }));

    const filterMangasByYear = () => {
        if (selectedYears.length === 0) return mangaTrends;
        return mangaTrends.filter(yearData => selectedYears.includes(yearData.year));
    };

    return (
        <div className="trends-container">
            <h1>Trends</h1>
            <Select
                options={yearOptions}
                isMulti
                className="year-select"
                onChange={selectedOptions => setSelectedYears(selectedOptions.map(option => option.value))}
                value={yearOptions.filter(option => selectedYears.includes(option.value))}
                placeholder="Select years to display"
            />
            {filterMangasByYear().map(yearData => (
                <div key={yearData.year} className="year-section">
                    <h2>{yearData.year}</h2>
                    <div className="manga-flex-container">
                        {yearData.mangas.map(manga => (
                            <div key={manga.id} className={`trends-manga-card ${manga.className}`}>
                                <div className="trends-manga-card-content">
                                    <img src={manga.image} alt={manga.title} />
                                    <div className="trends-manga-hover-info">
                                        <p>{manga.description}</p>
                                    </div>
                                </div>
                                <div className="trends-manga-title">{manga.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Trends;
