// Admin page
// This page uses the orderview component to display a list of orders

import axios from "axios";
import { useEffect, useState } from "react";
import OrderView from "../components/OrderView";
import "../css/Style.css";

const Admin = () => {
    const [orders, getOrders] = useState('');
    const apiEnd = 'http://localhost:3000/order/list';
    
    useEffect(() => {
        getAllOrders();
    }, [])

    const getAllOrders = () => {
        axios.get(apiEnd)
        .then(response => {
            const allOrders = response.data;
            getOrders(allOrders);
        })
        .catch(err => { 
            console.log(err);
        })
    }


    return (
        <>
            <h1>Admin</h1>
            <p>This would be the admin page :)</p>
            <br></br>
            <div className="order-wrapper">
                <OrderView orders={orders}/>
            </div>
        </>
    );
};

export default Admin;