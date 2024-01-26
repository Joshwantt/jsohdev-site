import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import React, {Fragment} from 'react';

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <div className='text-9xl font-bold min-h-screen grid items-center justify-center'>
                <h1>404</h1>
            </div>

        </Layout>
    );
}
