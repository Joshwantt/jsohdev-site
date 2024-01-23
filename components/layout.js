import Head from 'next/head';
import styles from './layout.module.css';
import Navbar from './navbar';
import {motion} from 'framer-motion';

const name = 'jsoh dev';
export const siteTitle = 'jsoh dev';

export default function Layout({children}) {
    return (
        <>
            <Head name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="icon" href="/favicon.svg"/>
                <meta name="description" content="jsoh dev"/>
            </Head>

            <Navbar/>
            <main>
                <motion.div className={
                        styles.container
                    }
                    initial={
                        {
                            opacity: 0,
                            y: 15
                        }
                    }
                    animate={
                        {
                            opacity: 1,
                            y: 0
                        }
                    }
                    exist={
                        {
                            opacity: 0,
                            y: 15
                        }
                    }
                    transition={
                        {delay: 0.3}
                }>
                    {children} </motion.div>
            </main>
        </>
    );
}
