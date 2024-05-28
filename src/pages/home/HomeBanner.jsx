import React from 'react';
import imgBannerHome from '../../images/BannerHome.png';
import Banner from '../components/banner/Banner';

function HomeBanner() {
    return (
        <Banner
            title='Chez vous, partout et ailleurs'
            src={imgBannerHome} 
        />
    )
}
export default HomeBanner;