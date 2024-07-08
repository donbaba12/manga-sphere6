
import './MyList.css';
import React from 'react';
import { useWatchlist } from './WatchlistContext';

function MyList() {
    const { watchlist, removeFromWatchlist } = useWatchlist();

    return (
        <div className="watchlist-container">
            <h1>My Watchlist</h1>
            <ul>
                {watchlist.map(item => (
                    <li key={item.id}>
                        {item.title} - {item.type}
                        <button onClick={() => removeFromWatchlist(item.id)} style={{ marginLeft: '10px' }}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MyList;
