import { ADD, COMPLETE, DELETE, DISPLAY, EDIT } from "./actionTypes"

export const deleteProduct=(id)=>{
    return{
        type:DELETE,
        payload:id,
    }
}

export const completeProduct=(id)=>{
    return{
        type:COMPLETE,
        payload:id,
    }
}

export const addNewProduct=(newProduct)=>{
    return{
        type:ADD,
        payload:newProduct,
    }
}

export const editProduct=(editedProduct)=>{
    return{
        type:EDIT,
        payload:editedProduct,
    }
}

export const displayProduct=(productDisplay)=>{
    return{
        type:DISPLAY,
        payload:productDisplay,
    }
}


