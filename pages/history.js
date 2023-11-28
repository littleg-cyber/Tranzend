// pages/history.js

import React from 'react';
import Head from 'next/head';

const HistoryPage = () => (
  <div
    className="text-center d-flex flex-column justify-content-center align-content-center"
    style={{
      height: '90vh',
      padding: '30px',
      maxWidth: '400px',
      margin: '0 auto',
    }}
  >
    <Head>
      <title>History</title>
      <meta name="description" content="History Page" />
      {/* Add other meta tags, CSS links, etc., as needed */}
    </Head>

    <header>
      <h1>History Page</h1>
      {/* Add a navigation component or links here if needed */}
    </header>

    <main>
      <p>This page is currently under development.</p>
      <p>Add your content here...</p>
    </main>

    <footer>
      {/* Add footer content if needed */}
    </footer>
  </div>
);

export default HistoryPage;
