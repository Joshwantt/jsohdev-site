'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';

type Card =
    {
        nameNav: string;
        nameCard: string;
        overview: string;
        href: string;
        image: string;
        tags: string[];
    };

export default function Card({ nameNav, nameCard, overview, href, image, tags }: Card) {
    return (
        <motion.div className="card w-96 bg-base-100 shadow-xl btn-ghost"
            whileHover={
                { scale: 1.05 }
            }
            whileTap={
                { scale: 0.95 }
            }>
            <Link href={href}>
                <figure><img src={image} alt={nameCard} /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {nameCard}
                    </h2>
                    <p>{overview}</p>
                    <div className="card-actions justify-end">
                        {
                            tags.map((tag, index) => (
                                <div key={index} className="badge badge-outline">{tag}</div>
                            ))}
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}
