import React from 'react';
import Product from './product';
import { Link } from 'react-router-dom';

import Banner from './banner'

export default class Review extends React.Component {

    constructor() {
        super()
        this.state = {cart: [{ sku: 38094374, unitPrice: 24.0, name: "Red Shirt", quantity: 2 }, { sku: 38094375, unitPrice: 24.0, name: "Blue Shirt", quantity: 1 }, { sku: 38094321, unitPrice: 12.0, name: "Blue socks", quantity: 4 }]}
    }

    findTotal() {
        let sum = 0;
        this.state.cart.forEach(item => {
            sum += item.unitPrice;
        })
        return sum;
    }

    render() {
        return (
            <div className="table height-transfer">
                < Banner />
                <div className="table-header">
                    <div id="larger-grow">Your Cart</div>
                    <div>Quantity</div>
                    <div>Price</div>
                </div>
                <div className="product-box">
                    {this.state.cart.map(function(x) {
                        return <Product sku={x.sku} price={x.unitPrice} name={x.name} quantity={x.quantity} />
                    })}
                </div>
                <div className="footer">
                    <div id="larger-grow"></div>
                    <div>Subtotal</div>
                    <div>${this.findTotal()}.00</div>
                </div>
                <div className="checkout-btn-div">
                    <Link to ="/billing"><button className="checkout-btn">CheckOut</button></Link>
                </div>
            </div>
        )
    }
}