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
    let isMounted = true; // Flag to track mounted/unmounted state

    // Fetch the JSON data
    fetch('/people.json')
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          const foundPerson = data.people.find((obj) => obj.ID === Number(contact));
          setPerson(foundPerson);
        }
      });

    // Cleanup function to cancel the task when component unmounts
    return () => {
      isMounted = false;
    };
  }, [contact]); // Add 'contact' as a dependency to useEffect

  return (
    <div
      className="comment-page text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <Head>
        <title>Confirm</title>
        <meta name="description" content="Profile Page" />
        {/* Add other meta tags, CSS links, etc., as needed */}
      </Head>
      <div className="page-title">
        <header>
          <h1>Money Zent!</h1>
          {/* Add a navigation component or links here if needed */}
        </header>
      </div>
      <div className="transfer-styles">
        <main>
          <h2>Transfer Successful</h2>
          {person && (
            <div className="row">
              <div className="col-12">
                <h4>Name: {person.name}</h4>
              </div>
              <div className="col-12">
                <h4>Amount: ${amount}</h4>
              </div>
            </div>
          )}
        </main>
      </div>
      <div className="send-btn-card-transfer">
        <footer>
          <Link href={`/history?amount=${amount}&contact=${contact}&comment=${comment}&sent=${sent}`} passHref>
            <button className="send-button" type="button">Done</button>
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default TransferSuccessPage;
