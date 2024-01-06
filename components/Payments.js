import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

function PaymentsComponent({
  name, picture, amount, comment, sent,
}) {
  return (
    <div
      className="payments-container"
    >
      <div className="payment-details-img">
        <div className="id-img">
          <Image
            className="profile-img"
            src={picture}
            alt={name}
            width={40}
            height={40}
          />
        </div>
        <div className="col-5">
          <h4>{name}</h4>
        </div>
        <div className="col-3">
          <p>{comment}</p>
        </div>
      </div>
      <div className="payment-details-amount">
        <p className={sent === false ? 'green' : 'red'}>{amount}</p>
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
