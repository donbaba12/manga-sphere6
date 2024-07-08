// Example: Home.js (similar structure for other pages)

import React from 'react';
import './Trends.css'; // Adjust the path as necessary based on your file structure
function Trends() {
    const mangaTrends = [
        { year: 2023, mangas: [
            { id: 1, title: "Demon Slayer", description: "Demon", image: '/images/DS.png' },
            { id: 2, title: "Jujutsu", description: "Fléaux", image: '/images/DS.png' },
            { id: 3, title: "One Piece", description: "Pirate", image: '/images/DS.png' },
        ]},
        { year: 2022, mangas: [
            { id: 1, title: "Code Geass", description: "Power", image: './DS.png' },
            { id: 2, title: "Death Note", description: "Demon", image: './DS.png' },
            { id: 3, title: "One Piece", description: "Pirates", image: './DS.png' },
        ]},
    ];

    return (
        <div>
            <h1>Top Mangas</h1>
            {mangaTrends.map(yearData => (
                <div key={yearData.year}>
                    <h2>{yearData.year}</h2>
                    <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
                        {yearData.mangas.map(manga => (
                            // Within your Trends.js React component
<div className="trends-manga-card">
    <img src={manga.image}  />
    <h3>{manga.title}</h3>
    <p>{manga.description}</p>
</div>

                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Trends;
