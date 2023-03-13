import React from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Payment = () => {
    const options = {
        // passing the client secret obtained from the server
        clientSecret: 'sk_test_51IQ9ffAnTX1mgMemrZSOpuQSEx23WpY7Q5bFsc1nOq28lHW2dTRa0ujI2yqIpqHupA84UUgPzt5EzWMT4rfpRTOf00Qw9ZULQI',
      };
    
  return (
    <>
   {/* <Elements stripe={stripePromise} options={options}>
        
  </Elements> */}
</>
  )
}

export default Payment


