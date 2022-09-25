import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { editProduct } from '../redux/actions';
import "../App.css"


const EditProduct = ({product}) => {
    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [imageUrl, setImageUrl] = useState(product.imageUrl);
    const [count, setCount] = useState(product.count);
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const editedOne={
            id:product.id,
            name: name,
            description:description,
            imageUrl: imageUrl,
            size: {
                width: 200,
                height: 200,
            },
            count: count
        };
        dispatch(editProduct(editedOne));
        closeModal();
    };

    const customStyles = {
        content: {
            top:'50%',
            left:'50%',
            right:'auto',
            bottom:'auto',
            marginRight:'-50%',
            transform:'translate(-50%, -50%)',
        },
    };
    Modal.setAppElement('#root');
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <Button onClick={openModal}><i className={"fa-solid fa-pen-to-square"}></i></Button>
            
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                    <form onSubmit={handleSubmit}>
                        <input className='input' type='text' value={name} onChange={e=>setName(e.target.value)}/>
                        <input className='input' type='text' value={description} onChange={e=>setDescription(e.target.value)}/>
                        <input className='input' type='text' value={imageUrl} onChange={e=>setImageUrl(e.target.value)}/>
                        <input className='input' type='text' value={count} onChange={e=>setCount(e.target.value)}/>
                        <Button type='submit'><i className="fa-solid fa-check"></i></Button>
                        <Button variant='danger' onClick={closeModal}><i className="fa-solid fa-xmark"></i></Button>
                    </form>        
            </Modal>
        </div>
    )
}

export default EditProduct