import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { Gift } from '../requests';
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
        }
    },
};

export default function GiftUserForm(props) {
    const stripe = useStripe();
    const elements = useElements();
    const [amount, setAmount] = useState(0);
    const [dis, setDis] = useState(true)
    const handleSubmit = async (event) => {
        setDis(true)
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        const result = await stripe.createToken(card);

        if (result.error) {
            console.log(result.error.message);
        } else {
            Gift.create({ token: result.token.id, answer_id: props.answer_id, amount }).then(data => {
                setDis(false)
                if (data.status === 200) {
                    setAmount(0)
                    alert('Success!');
                } else {
                    alert(data.msg);
                }
            })
        }
    };

    return (
        <>
            <Spinner show={dis} />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="amount">Amount</label>
                    <input type="number" name="amount" id="amount" value={amount} onChange={e => setAmount(e.target.value)} />
                </div>
                <br />
                <label>
                    Card details
                    <CardElement options={CARD_ELEMENT_OPTIONS} />
                </label>
                <button disabled={!stripe}>Confirm order</button>
            </form>
        </>
    );
}

