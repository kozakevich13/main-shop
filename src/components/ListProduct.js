import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product';

const ListProduct = () => {
    const { products, displayProductStyle } = useSelector(state => state)
    function sortByCount() {
        products.sort((a, b) => a.count > b.count ? 1 : -1);
    }
    function sortByAll() {
        products.sort((a, b) => a.name > b.name ? 1 : -1);
        console.log(products)
    }
    if (displayProductStyle === "sortByName") {
        sortByAll()
        return (
            <div style={{ marginTop: "20px" }}>
                {React.Children.toArray(products.map(product => <Product product={product} key={product.id} />))}
            </div>
        )
    } else if(displayProductStyle === "sortByCount"){
        sortByCount()
        return(
            <div style={{ marginTop: "20px" }}>
            {React.Children.toArray(products.map(product => <Product product={product} key={product.id} />))}
        </div>
        )
    } 

}

export default ListProduct