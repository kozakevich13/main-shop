import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../redux/actions'
import EditProduct from './EditProduct';

const Product = ({ product }) => {
    const dispatch = useDispatch();
    return (
        <div style={{ width: "50%", margin: "20px auto", boxShadow: '5px 10px whitesmoke' }}>
            <Card>
                <Card.Body>
                    <h2>{product.name}</h2>
                    <img style={{width: product.size.width , height: product.size.height }} src={product.imageUrl} alt="products"></img>
                    <p>{product.description}</p>
                    <p>Count: {product.count}</p>
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <Button variant="danger" onClick={() => dispatch(deleteProduct(product.id))}><i className={"fa-solid fa-trash"}></i> </Button>
                        <EditProduct product={product} />
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Product