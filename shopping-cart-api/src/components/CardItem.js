import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap'

const CardItem = ({ product, addToCart }) => {
    return (
        <Card className='mt-2 mb-1'>
            <CardImg
                top
                height="300"
                width="100%"
                src={product.mediumImage}
            />
            <CardBody className='text-center'>
                <CardTitle>Name: {product.productName}</CardTitle>
                <CardText className='secondary'>Price: $ {product.productPrice}</CardText>
                <Button color='info' onClick={() => addToCart(product)} >Add to cart</Button>
            </CardBody>
        </Card>
    )
}

export default CardItem