import React from 'react';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import Gallery from '../../components/gallery/Gallery';
import Footer from '../../components/footer/Footer';



function Home() {
    return (
        <html>
            <Header/>
        <main className='home'>
            <Banner />
            <Gallery/>
        </main>
            <Footer />
        
        </html>
    )
}

export default Home