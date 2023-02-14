import React from 'react';
import CreateNft from '../CreateNft/CreateNft';
import Hero from '../Hero/Hero';
import Wallets from '../Wallets/Wallets';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Hero/>
            <Wallets/>
            <CreateNft/>
        </div>
    );
};

export default Home;
