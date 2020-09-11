import React, { useState, useEffect, Fragment } from 'react';

import { IS_DEV } from '../../utils/envUtils';

import { DEV_URL, PROD_URL } from '../../utils/urls';

import { awsPrinciplesApi } from '../../apis/aws-api';

import { REQUEST_METHOD } from '../../utils/reqMethods';

import PrincipleList from '../PrincipleList';

import './style.scss';

const LandingPage = () => {
  const [principles, setPrinciples] = useState([]);

  useEffect(() => {
    const principlesPromise = awsPrinciplesApi(
      IS_DEV ? DEV_URL : PROD_URL,
      REQUEST_METHOD.GET
    );

    principlesPromise.then((principles) => setPrinciples(principles.data));
  }, []);

  if (!principles) return <div>Loading...</div>;

  return (
    <div className='LandingPage'>
      <header className='title-banner'> AWS Leadership Principles</header>
      <PrincipleList principles={principles}></PrincipleList>
    </div>
  );
};

export default LandingPage;
