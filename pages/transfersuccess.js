import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

function TransferSuccessPage() {
  const router = useRouter();
  const {
    amount, contact, comment, sent,
  } = router.query;

  const [person, setPerson] = useState(null);

  useEffect(() => {
    // Fetch the JSON data
    fetch('/people.json')
      .then((response) => response.json())
      .then((data) => setPerson(data.people.find((obj) => obj.ID === Number(contact))));
  });
  return (
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
        <title>Confirm</title>
        <meta name="description" content="Profile Page" />
        {/* Add other meta tags, CSS links, etc., as needed */}
      </Head>

      <header>
        <h1>Transfer ZENT</h1>
        {/* Add a navigation component or links here if needed */}
      </header>

      <main>
        {person && (
        <div className="row">
          <div className="col-12">
            <h3>{person.name}</h3>
          </div>
          <div className="col-12">
            <h3>{amount}</h3>
          </div>
          <div className="col-12">
            <p>Email: {person.email}</p>
          </div>
        </div>
        )}
      </main>

      <footer>
        <Link href={`/history?amount=${amount}&contact=${contact}&comment=${comment}&sent=${sent}`} passHref>
          <button className="send-button" type="button">Send</button>
        </Link>
      </footer>
    </div>
  );
}

export default TransferSuccessPage;
