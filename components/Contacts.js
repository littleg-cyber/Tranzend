import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

function ContactsComponent({ onNext }) {
  const [people, setPeople] = useState([]);
  const [selectedDiv, setSelectedDiv] = useState(null);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    fetch('/people.json')
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setPeople(data.people);
        }
      });

    return () => {
      setIsMounted(false);
    };
  }, [isMounted]);

  const handleClick = (personid) => {
    setSelectedDiv(personid);
    if (isMounted) {
      onNext(personid);
    }
  };

  return (
    <div className="choose-contact-styles">
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
          <div className="people-container">
            <div className="id-img">
              <Image
                className="profile-img"
                src={person.picture}
                alt={person.name}
                width={40}
                height={40}
              />
            </div>
            <div className="id-info">
              <p className="id-name">{person.name}</p>
              <p>{person.email}</p>
            </div>
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
