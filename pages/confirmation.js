import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';

function ConfirmationPage() {
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
  }, [contact]); // Add 'contact' as a dependency to useEffec

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

      <header>
        <div className="page-title">
          <h1>Send Money</h1>
        </div>

        {/* Add a navigation component or links here if needed */}
      </header>

      <main>
        <div>
          <div className="comment-styles">
            {person && (
            <div className="row">
              <div className="col-12">
                <Image
                  className="gracespictureclass"
                  src={person.picture}
                  alt={person.name}
                  width={50}
                  height={50}
                />
              </div>
              <div className="col-12">
                <h3>{person.name}</h3>
              </div>
              <div className="col-12">
                <p>Email: {person.email}</p>
              </div>
              <p><i>{comment}</i></p>
            </div>
            )}
          </div>
        </div>

      </main>
      <div className="send-btn-card">
        <footer>
          <Link href={`/transfersuccess?amount=${amount}&contact=${contact}&comment=${comment}&sent=${sent}`} passHref>
            <button className="send-button" type="button">Send</button>
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default ConfirmationPage;
