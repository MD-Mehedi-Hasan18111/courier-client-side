import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './AddService.css';

const AddService = () => {


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        
        fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                swal("Great!", "You Added a New Service!", "success");
                e.target.reset();
            }
        })

    }


    return (
        <div>
            <Header />
            <div className="container mb-4">
            <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Service title" defaultValue="" {...register("name", { required: true })} />
                <br />
                {errors.name && <span className="text-danger">This field is required</span>}<br />

                <input placeholder="Image URL" {...register("image", { required: true })} />
                <br />
                {errors.image && <span className="text-danger">This field is required</span>}<br />

                <textarea placeholder="Description" {...register("description", { required: true })} />
                <br />
                {errors.description && <span className="text-danger">This field is required</span>}<br />

                <input placeholder="Delivery Charge" type="number" {...register("charge", { required: true })} />
                <br />
                {errors.charge && <span className="text-danger">This field is required</span>}<br />

                <button className="btn addBtn" type="submit">Add Service</button>
                </form>
            </div>
            </div>
            <Footer />
        </div>
    );
};

export default AddService;