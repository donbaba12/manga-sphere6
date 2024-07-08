import React, { useState } from 'react';
import './MangaCard.css'; // Ensure to create a CSS file for styling
import Modal from 'react-modal';
import { useWatchlist } from './WatchlistContext';
function MangaCard({ manga }) {
    const [showBubble, setShowBubble] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { addToWatchlist } = useWatchlist(); 

    const toggleBubble = () => setShowBubble(!showBubble);
    const openModal = (event) => {
        event.stopPropagation();  // This stops the click event from closing the info bubble
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    const handleAddToList = () => {
        addToWatchlist(manga);
        alert(`${manga.title} added to your watchlist!`);
    };

    return (
        <div className="manga-card" onClick={toggleBubble}>
            <img src={manga.image}  />
            <h3>{manga.title}</h3>
            {showBubble && (
                <div className="info-bubble">
                    <p>{manga.episodes} episodes</p>
                    <p>Type: {manga.type}</p>
                    <button onClick={openModal}>Watch Trailer</button>
                    <button onClick={handleAddToList}>Add to List</button>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Manga Trailer"
                        className="modal"
                        overlayClassName="overlay"
                    >
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/VQGCKyvzIM4"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                            title="YouTube video player"
                        ></iframe>
                        <button onClick={closeModal}>Close</button>
                    </Modal>
                </div>
            )}
        </div>
    );
}

export default MangaCard;
