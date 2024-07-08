
// src/contexts/WatchlistContext.js
import React, { createContext, useContext, useState } from 'react';

const WatchlistContext = createContext();

export const useWatchlist = () => useContext(WatchlistContext);

export const WatchlistProvider = ({ children }) => {
    const [watchlist, setWatchlist] = useState([]);

    const addToWatchlist = (manga) => {
        setWatchlist(current => [...current, manga]);
    };

    const removeFromWatchlist = (mangaId) => {
        setWatchlist(current => current.filter(manga => manga.id !== mangaId));
    };

    return (
        <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist }}>
            {children}
        </WatchlistContext.Provider>
    );
};
