import React from 'react'
import { Link } from 'react-router-dom'

import Banner from './banner'
import TableRow from './billing-table-row'

export default class Billing extends React.Component {
    render() {
        return (
            <div className="table">
            < Banner />
                <div className = "billing-header">
                    Check Out
                </div>
                <div className="billing-structure">
                    <div style={{marginRight: "20px"}}>
                        <div className="billing-table-title">Payment Information</div>
                        <div className="billing-inner-table">
                            <TableRow title={"Name on Card"} placeholder={"Name on Card"}/>
                            <TableRow title={"Card Number"} placeholder={"XXXX XXXX XXXX XXXX"}/>
                            <TableRow title={"Expiration Date"} placeholder={"Month"}/>
                            <TableRow title={"CVV"} placeholder={"City"}/>
                        </div>
                    </div>
                    <div>
                        <div className="billing-table-title">Shipping Address</div>
                        <div className="billing-inner-table">
                            <TableRow title={"Name"} placeholder={"Full Name"}/>
                            <TableRow title={"Address"} placeholder={"Address"}/>
                            <TableRow title={"Apt/suite/etc"} placeholder={"Apt/suite/etc"}/>
                            <TableRow title={"City"} placeholder={"City"}/>
                            <TableRow title={"Country"} placeholder={"Country"}/>
                            <TableRow title={"State"} placeholder={"State"}/>
                            <TableRow title={"ZIP Code"} placeholder={"ZIP code"}/>
                            <div className="row" style={{marginTop:"20px"}}>
                                <div></div>
                                <span style={{flex:"2"}}><input type="checkbox"></input>Billing address same as shipping</span>
                            </div>                           
                        </div>
                    </div>
                </div>
                <div className="checkout-btn-div">
                    <Link to ="/confirm"><button className="checkout-btn">Place Order</button></Link>
                </div>
            </div>
        )
    }
}