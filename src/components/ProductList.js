import React, { Component } from 'react'
import Product from './Product'

export default class ProductList extends Component {
    render() {
        return (
            <div>
                <Product />
                <h3>Hello from ProductList</h3>
            </div>
        )
    }
}
