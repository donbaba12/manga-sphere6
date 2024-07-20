import React from 'react';
import './FAQ.css'; 

function FAQ() {
    const faqs = [
        {
            question: "What is Manga Sphere?",
            answer: "Manga Sphere is a non-profit organization dedicated to promoting the enjoyment and appreciation of manga through discovery and recommendation services."
        },
        {
            question: "How do I add a manga to my watchlist?",
            answer: "You can add a manga to your watchlist by clicking the 'Add to List' button on the manga's card."
        },
        {
            question: "How do I filter manga by genre?",
            answer: "Use the filter options on the 'All Mangas' page to select the genres you are interested in."
        },
       
    ];

    return (
        <div className="faq-container">
            <h1 className="page-title">Frequently Asked Questions</h1>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <h2 className="faq-question">{faq.question}</h2>
                        <p className="faq-answer">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FAQ;
