import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/homeLayout/RightAside';
import NewsDetailsCard from '../Components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [news, setNews] = useState({});
    console.log(news)

    useEffect( ()=>{
        const newsDetail = data.find(singleNews => singleNews.id == id);
        setNews(newsDetail);
    },[data, id])

    return (
        <div className='w-10/12 mx-auto'>
            <header className='py-3'>
                <Header></Header>
            </header>
            <main className='grid grid-cols-12 mt-10'>
                <section className='col-span-9'>
                    <h2 className='font-bold mb-5'>News Details</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;