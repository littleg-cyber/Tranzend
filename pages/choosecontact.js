import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ContactsComponent from '../components/Contacts';

function ChooseContactPage() {
  const router = useRouter();
  const { amount, sent } = router.query;

  const [id, setId] = useState(null);

  const handleNextStep = (personid) => {
    setId(personid);
    // Further actions...
  };
  return (
    <div
      className="choose-contact-page text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <Head>
        <title>Choose contact</title>

        <meta name="description" content="Profile Page" />
        {/* Add other meta tags, CSS links, etc., as needed */}
      </Head>

      <header>
        <div className="page-title">
          <h1>Send Money</h1>
        </div>
      </header>

      <main>
        <ContactsComponent onNext={handleNextStep} />
      </main>

      <footer>
        <div className="send-btn-card">
          <Link href={`/addcomment?amount=${amount}&contact=${id}&sent=${sent}`} passHref>
            <button className="send-button" type="button">Send</button>
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default ChooseContactPage;
