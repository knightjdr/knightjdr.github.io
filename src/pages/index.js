import React from 'react';

import Layout from '../components/layout/layout';
import Head from '../components/seo/seo';

import './index.css';

const IndexPage = () => (
  <Layout
    logo={false}
    navbarBackground={false}
  >
    <Head title="Home" />
    <div className="home">
      <a href="https://github.com/knightjdr">James Knight&apos;s GitHub profile</a>
    </div>
  </Layout>
);

export default IndexPage;
