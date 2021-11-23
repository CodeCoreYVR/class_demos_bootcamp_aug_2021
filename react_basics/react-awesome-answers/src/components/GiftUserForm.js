import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import './css/GiftUserForm.css';
import { Gift } from '../requests';
import { withRouter } from 'react-router-dom';
import Spinner from './Spinner'

const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            color: "#32325d",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
                color: "#aab7c4",
            },
        },
        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a",
        },
    },
};

const GiftUserForm = (props) => {
    const stripe = useStripe();
    const elements = useElements();
    const [amount, setAmount] = useState(0);
    const [show, setShow] = useState(false);

    const handleSubmit = async (event) => {
        setShow(true)
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        const result = await stripe.createToken(card);

        if (result.error) {
            console.log(result.error.message);
        } else {
            // Send the token to your server.
            // get the amount and send the request to Rails API

            Gift.create({ token: result.token.id, amount: amount, answer_id: props.answer_id })
                .then(data => {
                    setShow(false)
                    if (data.status === 200) {
                        alert('Success');
                        props.history.push('/')
                    } else {
                        alert('Something wrong here');
                    }
                })
        }
    };

    return (
        <>
            <Spinner show={show} />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="amount">Amount:</label>
                    <input type="number" name="amount" id="amount" height="40px" value={amount}
                        onChange={e => setAmount(e.currentTarget.value)}
                    />
                </div>
                <label>
                    Card details
                    <CardElement options={CARD_ELEMENT_OPTIONS} />
                </label>
                <button disabled={!stripe}>Gift This User</button>
            </form>
        </>
    );
}

export default withRouter(GiftUserForm)
