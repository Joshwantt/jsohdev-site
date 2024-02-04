'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import { CardType } from '../_types/cards';

export default function Card({ nameCard, overview, modalContent, image, tags }: CardType) {
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        const fetchMarkdownContent = async () => {
            try {
                const response = await fetch(modalContent); //fetching in client - not ideal would like to refactor this into a server component that wraps the card
                const markdownContent = await response.text();

                const result = await remark().use(remarkHtml).process(markdownContent);

                const modalClose = '<form method="dialog"><button className="btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button></form>'
                setHtmlContent(modalClose + result.toString());
            } catch (error) {
                console.error('Error fetching or converting Markdown:', error);
            }
        };

        fetchMarkdownContent();
    }, []);

    const handleButtonClick = () => {
        const dialogElement = document.getElementById(nameCard) as HTMLDialogElement | null;
        if (dialogElement) {
            dialogElement.showModal();
        }
    };

    return (
        <motion.div
            className="card max-w-96 bg-base-100 shadow-xl btn-ghost"
            whileHover={{ scale: 1.05 }}
        >
            <button onClick={handleButtonClick}>
                <figure><img src={image} alt={nameCard} /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {nameCard}
                    </h2>
                    <p>{overview}</p>
                    <div className="card-actions justify-end">
                        {tags.map((tag, index) => (
                            <div key={index} className="badge badge-outline">{tag}</div>
                        ))}
                    </div>
                </div>
            </button>
            <dialog id={nameCard} className="modal">
                <div className="modal-box container prose" dangerouslySetInnerHTML={{ __html: htmlContent }}>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button onClick={() => handleButtonClick()}>close</button>
                </form>
            </dialog>
        </motion.div>
    );
}