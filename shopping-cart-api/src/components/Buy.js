import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { random, commerce, datatype } from 'faker'
import { Container, Row, Col } from 'reactstrap'
import CardItem from './CardItem'

const URL = 'https://api.pexels.com/v1/search/?query=laptop&per_page=6&page=1'
const API_KEY = process.env.API_KEY

const Buy = ({ addToCart }) => {
    const [product, setProduct] = useState([])

    const fetchImages = async () => {
        const { data } = await Axios.get(URL, {
            header: {
                Authorization: API_KEY
            }
        })
        console.log(data)
        const { photos } = data;

        const allProducts = photos.map(photo => ({
            smallImage: photo.src.small,
            mediumImage: photo.src.medium,
            tinyImage: photo.src.tiny,
            productName: random.word(),
            productPrice: commerce.price(),
            id: datatype.uuid()
        }))
        console.log(allProducts)
        setProduct(allProducts)
    }

    useEffect(() => {
        fetchImages()
    }, [])

    return (
        <Container fluid>
            <h1 className='text text-center'>
                Purchase Products
            </h1>
            <Row>
                {product.map(product => (
                    <Col md={4} key={product.id}>
                        <CardItem product={product} addToCart={addToCart}></CardItem>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Buy