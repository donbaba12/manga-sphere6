import React, { useState } from 'react';
import './MangaCard.css'; 
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';
import { useWatchlist } from './WatchlistContext';

function MangaCard({ manga }) {
    const { t } = useTranslation();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { addToWatchlist } = useWatchlist(); 

    const openModal = (event) => {
        event.stopPropagation(); 
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleAddToList = () => {
        addToWatchlist(manga);
        alert(`${manga.title} ${t("added to your watchlist!")}`);
    };

    return (
        <div className={`manga-card ${manga.className}`} role="gridcell">
            <div className="manga-card-content">
                <img src={manga.image} alt={`${manga.title} cover`} className="manga-image" />
                <div className="manga-hover-info">
                    <p>{manga.episodes} {t("episodes")}</p>
                    <p>{t("Type")}: {manga.type}</p>
                    <button onClick={openModal}>{t("Watch Trailer")}</button>
                    <button onClick={handleAddToList}>{t("Add to List")}</button>
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
                            src={manga.trailer}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title={`${manga.title} Trailer`}
                        ></iframe>
                        <button onClick={closeModal}>{t("Close")}</button>
                    </Modal>
                </div>
            </div>
            <div className="manga-title">{manga.title}</div>
        </div>
    );
}

export default MangaCard;
