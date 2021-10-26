import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'

const homeScreen = () => {
    return (
        <>
           <h1>Latest Products</h1> 
           <Row>
               {products.map((products) =>(
                     <Col key = {products._id} sm ={12} md = {6} lg={4} xlg={3} >
                       <Product product = {products} />
                      </Col>
                    )) }
           </Row>
        </>
    )
}

export default homeScreen
