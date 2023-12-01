import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import CommentsComponent from '../components/Comment';

function ChooseCommentPage() {
  const router = useRouter();
  const { amount, contact, sent } = router.query;

  const [comment, setComment] = useState('');
  const [person, setPerson] = useState(null);

  const handleNextStep = (note) => {
    setComment(note);
    // Further actions...
  };

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
        <title>Send Comment</title>
        <meta name="description" content="Profile Page" />
        {/* Add other meta tags, CSS links, etc., as needed */}
      </Head>

      <header>
        <h1>Send a Comment</h1>
        {/* Add a navigation component or links here if needed */}
      </header>

      <main>
        {person && (
        <CommentsComponent name={person.name} pictureUrl={person.picture} email={person.email} onNext={handleNextStep} />
        )}
      </main>

      <footer>
        <Link href={`/confirmation?amount=${amount}&contact=${contact}&comment=${comment}&sent=${sent}`} passHref>
          <button className="send-button" type="button">Send</button>
        </Link>
      </footer>
    </div>
  );
}

export default ChooseCommentPage;
