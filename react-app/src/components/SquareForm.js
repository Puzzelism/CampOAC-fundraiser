import { React, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { MySelect, MyTextInput, MyRadio } from '../components/Inputs';
import getCurrentDate from '../components/CurrentDate';

import { PaymentForm } from 'react-square-web-payments-sdk';


const OrderForm = (props) => {

    // access a location via prop
    const { location, onSubmit } = props;
    const currDate = getCurrentDate();
    // Api endpoint for order submission
    const apiEnd = `${process.env.REACT_APP_BACKEND_URL}/order/square`;





    // this state is used for the order id sent from the api

    // conditional check if the state has been updated
    return (
        <div className='squareForm'>
            <PaymentForm
                applicationId="sandbox-XXXXXX"
                cardTokenizeResponseReceived={(token, verifiedBuyer) => {
                console.log('token:', token);
                console.log('verifiedBuyer:', verifiedBuyer);
                }}
                locationId='XXXXXXXXXX'
            >
                <CreditCard />
            </PaymentForm>
        </div>
    )
}