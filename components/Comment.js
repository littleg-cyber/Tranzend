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
    <div className="comment-container">
      <div className="row">
        <div className="col-12">
          <Image
            className="gracespictureclass"
            src={pictureUrl}
            alt={name}
            width={50}
            height={50}
          />
        </div>
        <div className="col-12">
          <h3>{name}</h3>
        </div>
        <div className="col-12">
          <p>Email: {email}</p>
        </div>
        <div className="commentInput">
          <input
            type="text"
            value={comment}
            onChange={handleInputChange}
          />
        </div>
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
