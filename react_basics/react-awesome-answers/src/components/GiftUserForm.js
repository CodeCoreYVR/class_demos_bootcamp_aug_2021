import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import './css/GiftUserForm.css';
import { Gift } from '../requests';

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

export default function GiftUserForm(props) {
    const stripe = useStripe();
    const elements = useElements();
    const [amount, setAmount] = useState(0);

    const handleSubmit = async (event) => {
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
                    console.log(data);
                })
        }
    };

    return (
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
            <button disabled={!stripe}>Confirm order</button>
        </form>
    );
}
