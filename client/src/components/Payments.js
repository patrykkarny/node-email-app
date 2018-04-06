import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import StripeCheckout from 'react-stripe-checkout';

import * as actions from 'actions';

const PaymentsBase = ({ handleToken }) => (
  <StripeCheckout
    name="Emaily"
    description="$5 for 5 emails"
    amount={500}
    token={token => handleToken(token)}
    stripeKey={process.env.REACT_APP_STRIPE_KEY}
  >
    <button className="btn">Add Credits</button>
  </StripeCheckout>
);

PaymentsBase.propTypes = {
  handleToken: PropTypes.func.isRequired,
};

export const Payments = connect(null, actions)(PaymentsBase);
