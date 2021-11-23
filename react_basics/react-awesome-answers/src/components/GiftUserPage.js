import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import GiftUserForm from './GiftUserForm'


const stripePromise = loadStripe('pk_test_51JypOyKP3mgCg2b0XC8Hafosf7BeCRW4CsrkCBtQxBGzQ241r9CEFWlcT4c33nlOZJ8i49DNTOOjQ2kvvXj46jre00lGWaWxf8');

export default function GiftUserPage(props) {
    return (
        <Elements stripe={stripePromise}>
            <GiftUserForm answer_id={props.match.params.id} />
        </Elements>
    )
}
