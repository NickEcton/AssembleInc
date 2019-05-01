import React from 'react';
import { Link } from 'react-router-dom';

import Banner from './banner'

export default function Confirm() {
    return (
        <div className="table">
            < Banner />
            <div className = "billing-header">
                Order Complete
            </div>
            <div className="confirm-middle">
                Hooray! Way to order those products
            </div>
            <div className="confirm-div-button">
                <Link to="/review"><button className="confirm-button">Go Home</button></Link>
            </div>
        </div>
    )
}