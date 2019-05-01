import React from 'react'

export default class Product extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
    }

    render() {
        return (
            <div className="product-outline">
                <div id="larger-grow" style={{display: "flex"}}>
                    <div style={{display:"inline-block"}}>IMAGE</div>
                    <div className="item-description">
                        <div>{this.props.name}</div>
                        <div>SKU# {this.props.sku}</div>
                    </div>
                </div>
                <div>{this.props.quantity}</div>
                <div>${this.props.price}.00</div>
            </div>
        )
    }
}