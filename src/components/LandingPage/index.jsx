import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import {
    IS_DEV
} from '../../utils/envUtils';

import {
    DEV_URL,
    PROD_URL
} from '../../utils/urls';

import PrincipleList from '../PrincipleList'; 

import './style.scss'; 

const LandingPage = () => {

    const [principles, setPrinciples] = useState([])

    const getAllPriniciples = () => {
        return axios.get(IS_DEV ? DEV_URL : PROD_URL)
            .then(principles => setPrinciples(principles.data)).catch(err => console.log(err));
    }

    useEffect(() => {
        getAllPriniciples();
    }, [])

    if (!principles) return <div>Loading...</div>

    return (
        <div className='LandingPage'>
            <header className='title-banner'> AWS Leadership Principles</header>
            <PrincipleList
                principles={principles}
            >
            </PrincipleList>
        </div>
    )

}

export default LandingPage; 