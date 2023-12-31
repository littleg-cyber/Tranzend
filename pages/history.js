import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PaymentsComponent from '../components/Payments';

function HistoryPage() {
  const router = useRouter();
  const {
    amount, contact, comment, sent,
  } = router.query;

  const [people, setPeople] = useState([]);
  const [payments, setPayments] = useState([]);
  const [recentPerson, setRecentPerson] = useState(null);

  useEffect(() => {
    // Fetch the JSON data
    fetch('/people.json')
      .then((response) => response.json())
      .then((data) => {
        setPeople(data.people);
        if (!(!contact || contact.trim().length === 0)) {
          setRecentPerson(data.people.find((m) => m.ID === Number(contact)));
        }
      });

    fetch('/payments.json')
      .then((response) => response.json())
      .then((data) => setPayments(data.payments));
  }, [contact]); // Added contact as a dependency to trigger effect on contact change

  return (
    <div
      className="choose-contact-page"
      style={{
        height: '90vh',
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
        <div className="page-title">
          <h1>History Page</h1>
        </div>
        <div className="history-styles">
          <div>
            {recentPerson && (
            <PaymentsComponent
              name={recentPerson.name}
              picture={recentPerson.picture}
              comment={comment}
              amount={amount}
              sent={sent}
            />
            )}

            {payments.map((payment) => {
              const sents = payment.from === 0;
              const lookupId = sents ? payment.to : payment.from;
              const person = people.find((obj) => obj.ID === lookupId);

              if (person === undefined) {
                // If person is not found, handle accordingly
                return <div>Loading...</div>;
              } if (person === null) {
                // Handle the case when person is null (if needed)
                return <div>Person not found</div>;
              }
              return (
                <PaymentsComponent
                  key={payment.id} // Add a unique key for each component
                  name={person.name}
                  picture={person.picture}
                  comment={payment.note}
                  amount={payment.amount}
                  sent={sents}
                />
              );
            })}
          </div>
        </div>
      </header>

      <main />
      <footer>{/* Add footer content if needed */}</footer>
    </div>
  );
}

export default HistoryPage;
