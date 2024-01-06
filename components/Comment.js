import React, { useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

function CommentsComponent({
  onNext, name, pictureUrl, email,
}) {
  const [comment, setComment] = useState(null);

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setComment(newValue);
    onNext(newValue);
  };

  return (
    <div className="confirmation-styles">
      <div className="comment-id">
        <Image
          className="comment-id-photo"
          src={pictureUrl}
          alt={name}
          layout="fixed"
          width={75}
          height={75}
          objectFit="cover"
        />
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
      <div className="commentInput">
        <input
          type="text"
          placeholder="What's this for?"
          style={{ width: '336px', height: '112px' }}
          value={comment}
          onChange={handleInputChange}
        />
      </div>

    </div>

  );
}
CommentsComponent.propTypes = {
  onNext: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  pictureUrl: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
export default CommentsComponent;
