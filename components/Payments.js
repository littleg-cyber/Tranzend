import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

function PaymentsComponent({
  name, picture, amount, comment, sent,
}) {
  return (
    <div
      className="row"
    >
      <div className="col-4">
        <Image
          className="gracespictureclass"
          src={picture}
          alt={name}
          width={50}
          height={50}
        />
      </div>
      <div className="col-5">
        <h3>{name}</h3>
      </div>
      <div className="col-3">
        <p>{amount}</p>
      </div>
      <div className="col-12">
        <p className={sent === false ? 'green' : 'red'}>{comment}</p>
      </div>

    </div>

  );
}
PaymentsComponent.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  sent: PropTypes.bool.isRequired,
  amount: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
};
export default PaymentsComponent;
