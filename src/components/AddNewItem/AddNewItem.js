import React from 'react';
import './AddNewItem.css';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddNewItem = () => {
    const notify = () => toast("New Item Added");

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [user] = useAuthState(auth);


    const onSubmit = (data) => {
  
        data.email = user.email;  

        fetch('http://localhost:5001/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
            notify()
        
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-2 col-md-8 mx-auto my-5">
                    <h1 className="heading-1 mb-3">Add New Product</h1>
                    <form className="addNewItem" onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder="Name" {...register("name", { required: true })} /> <br />
                        <input placeholder="Price" {...register("price", { required: true })} /> <br />
                        <input placeholder="Description" {...register("description", { required: true })} /> <br />
                        <input placeholder="Quantity" {...register("quantity", { required: true })} /> <br />
                        <input placeholder="Supplier" {...register("supplier", { required: true })} /> <br />
                        <input placeholder="Image URL" {...register("img", { required: true })} /><br />
                        <input className="common-btn" type="submit" />
                        <ToastContainer />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddNewItem;