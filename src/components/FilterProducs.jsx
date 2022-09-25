import React from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { displayProduct } from '../redux/actions'


const FilterProducts = () => {
    const dispatch=useDispatch();

    return (
        <div style={{ width: "50%", margin: "20px auto"}}>
            <Form>
                <Form.Select aria-label="Default select example" onChange={e=>{dispatch(displayProduct(e.target.value))}}>
                    <option value="sortByName">sortByName</option>
                    <option value="sortByCount">sortByCount</option>
                </Form.Select>
            </Form>
        </div>
    )
}

export default FilterProducts