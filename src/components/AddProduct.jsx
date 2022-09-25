import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { addNewProduct } from '../redux/actions';
import "../App.css"

const AddProduct = () => {
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

    const [description, setDescription] = useState("");
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [count, setCount] = useState(0);

    const dispatch=useDispatch();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const newProduct={
            id:Math.random(),
            imageUrl: imageUrl.trimStart(),
            name: name.trimStart(),
            count: count,
            size: {
                width: 200,
                height: 200,
            },
            description:description.trimStart(),

        };
        dispatch(addNewProduct(newProduct));
        closeModal();
        setDescription("");
        setName("");
        setImageUrl("");
        setCount(0);
    }

    return (
        <div>
            <Button onClick={openModal}><i className="fa-solid fa-circle-plus"></i></Button>
            
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                    <form onSubmit={handleSubmit}>
                        <div className='form-input'>
                            <input className='input' type='text' value={name} onChange={e=>setName(e.target.value)} placeholder='Write a new name ...' required/>
                            <input className='input' type='text' value={imageUrl} onChange={e=>setImageUrl(e.target.value)} placeholder='Write a new url ...' required/>
                            <input className='input' type='text' value={description} onChange={e=>setDescription(e.target.value)} placeholder='Write a new description ...' required/>
                            <input className='input' type='text' value={count} onChange={e=>setCount(e.target.value)} placeholder='hight' required/>
                        </div>
                        <Button type='submit'><i className="fa-solid fa-plus"></i></Button>
                        <Button variant='danger' onClick={closeModal}><i className="fa-solid fa-xmark"></i></Button>
                    </form>
            </Modal>
        </div>
    )
}

export default AddProduct