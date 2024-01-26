import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import Card from '../components/card';
import React from 'react';
import { Nav } from '../util/navigation';

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div> 
                {
                    Nav.map((header,index) => (
                        <div className='py-8' key={index}>
                            <div className='text-3xl text-center'>{header.headerCard}</div>
                            <div className='flex flex-row flex-wrap justify-center place-content-evenly gap-12 py-8'>
                            {
                                header.items.map((item,cardIndex) => (
                                    <Card title={item.nameCard} body={item.overview} href={item.href} key={cardIndex}></Card>
                                ))
                            }
                            </div>
                        </div>
                    ))
                } 
            </div>
        </Layout>
    );
}
