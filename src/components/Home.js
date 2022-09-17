import React, {Fragment} from 'react';
import {Helmet} from 'react-helmet';

const Home = () => {
    return(
        <Fragment>
            <Helmet>
                <title>T.H.O.R.</title>
            </Helmet>

            <div className='mt-4 p-5 bg-primary text-white rounded'>
                <h1>T.H.O.R.</h1>
                <p>Lorem Ipsum...</p>
            </div>
        </Fragment>
    )
};

export default Home;