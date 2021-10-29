import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './Registration.css';

const Registration = () => {

    const {id} = useParams();
    const [service, setService] = useState({});
    const {user} = useAuth();

    const [name, setUsername] = useState('');
    const [email, setUseremail] = useState('');
    const [useraddress, setAddress] = useState('');
    const [regDate, setDate] = useState('');

    useEffect(() =>{
        fetch(`http://localhost:5000/registration/${id}`)
        .then(res => res.json())
        .then(data => setService(data))
    }, [])

    const handleRegister = (e) =>{
        e.preventDefault();
        const name = user.displayName;
        const email = user.email;
        const address = useraddress;
        const date = regDate
        const title = service.name;
        const charge = service.charge;
        const status = 'Pending';

        const regService = {name, email, date, address, title, charge, status};
        swal({
            title: "Are you sure?",
            text: "Registration for this service!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willConfirm) => {
            if (willConfirm) {
                fetch('http://localhost:5000/registration', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(regService)
                })
                .then(res => res.json())
                .then(data => {
                    if(data.acknowledged){
                        swal("Good!", "Registration Successful!", "success");
                        e.target.reset();
                    }
                })
            } else {
              swal("Your Registration Cancel");
              e.target.reset();
            }
          });
    }

    return (
        <div>
            <Header />
            <div className="container mb-4">
                <h2 className="mb-3 text-center"><span style={{color: "#ED1C24"}}>Registration</span> Service</h2>
            <div className="form">
                <form onSubmit={handleRegister}>
                    <input onBlur={(e) => setUsername(e.target.value)} type="text" placeholder="Full Name" defaultValue={user.displayName} required /><br /><br />
                    <input onBlur={(e) => setUseremail(e.target.value)} type="email" placeholder="Email" defaultValue={user.email} required /><br /><br />
                    <input type="text" placeholder="Service title" defaultValue={service.name} /><br /><br />
                    <input onBlur={(e) => setDate(e.target.value)} type="date" placeholder="Date" /><br /><br />
                    <input onBlur={(e) => setAddress(e.target.value)} type="text" placeholder="Address" required /><br /><br />
                    <input type="number" placeholder="Delivery Charge" defaultValue={service.charge} /><br /><br />
                <button className="btn addBtn" type="submit">Submit</button>
                </form>
            </div>
            </div>
            <Footer />
        </div>
    );
};

export default Registration;