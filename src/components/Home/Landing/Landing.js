import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import ClientSay from '../ClientSay/ClientSay';
import Map from '../Map/Map';
import Services from '../Services/Services';

const Landing = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Services />
            <Map />
            <ClientSay />
            <Footer />
        </div>
    );
};

export default Landing;