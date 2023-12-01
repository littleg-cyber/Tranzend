import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

function ContactsComponent({ onNext }) {
  const [people, setPeople] = useState([]);
  const [selectedDiv, setSelectedDiv] = useState(null);

  useEffect(() => {
    // Fetch the JSON data
    fetch('/people.json')
      .then((response) => response.json())
      .then((data) => setPeople(data.people));
  }, []);

  const handleClick = (personid) => {
    setSelectedDiv(personid);
    onNext(personid);
  };

  return (
    <div className="people-container">
      {people.map((person) => (
        <div
          className={selectedDiv === person.ID ? 'selectedPerson row' : 'row'}
          key={person.ID}
          onClick={() => handleClick(person.ID)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleClick(person.ID);
            }
          }}
          role="button" // Adding role="button" to indicate it's clickable
          tabIndex={person.ID}
        >
          <div className="col-4">
            <Image
              className="gracespictureclass"
              src={person.picture}
              alt={person.name}
              width={50}
              height={50}
            />
          </div>
          <div className="col-8">
            <h3>{person.name}</h3>
          </div>
          <div className="col-12">
            <p>Email: {person.email}</p>
          </div>
        </div>
      ))}
    </div>

  );
}
ContactsComponent.propTypes = {
  onNext: PropTypes.func.isRequired,
};
export default ContactsComponent;
