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
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
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
        <h1>choose contact</h1>
        {/* Add a navigation component or links here if needed */}
      </header>

      <main>
        <ContactsComponent onNext={handleNextStep} />
      </main>

      <footer>
        <Link href={`/addcomment?amount=${amount}&contact=${id}&sent=${sent}`} passHref>
          <button className="send-button" type="button">Send</button>
        </Link>
      </footer>
    </div>
  );
}

export default ChooseContactPage;
