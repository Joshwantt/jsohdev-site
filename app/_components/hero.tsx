'use client'

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HeroPropsType } from '../_types/hero';

// i would like to eventually pull these in as props based on markdown files in each directory. For now though i'll just hard code it..

export default function Hero({ image, title, subText, buttons }: HeroPropsType) {
    return (
        <div className='hero min-h-screen'>
            <div className="hero-content flex-col lg:flex-row">
                <Image src={
                    image
                }
                width="400"
                height="400"
                alt={title}/>
                <div>
                    <h1 className="text-5xl font-bold">
                        {
                            title
                        }</h1>
                    <p className="py-6">
                        {
                            subText
                        }</p>
                    <div className='flex flex-row gap-4'>
                        {
                            buttons.map((item, index) => (
                                <Link key={index} href={
                                    item.link
                                }>
                                    <motion.button className="btn btn-primary"
                                        whileHover={
                                            { scale: 1.05 }
                                        }
                                        whileTap={
                                            { scale: 0.95 }
                                        }>

                                        {
                                            item.text
                                        } </motion.button>
                                </Link>
                            ))
                        } </div>
                </div>
            </div>
        </div>
    )
}
