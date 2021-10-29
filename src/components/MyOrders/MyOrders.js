import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import './MyOrders.css';

const MyOrders = () => {

    const {user} = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() =>{
        fetch(`https://powerful-tor-47395.herokuapp.com/orders/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setOrders(data)
        })
    }, [orders, user.email])

    const cancelOrder = (id) =>{
        swal({
            title: "Are you sure?",
            text: "Cancel for this order registration.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                fetch(`https://powerful-tor-47395.herokuapp.com/allOrders/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        swal("Deleted!", "Deleted Successfully!", "success");
                    }
                })
            } else {
              swal("Delete Canceled!");
            }
          });
    }

    return (
        <div>
            <Header />
                <div className="container myOrder">
                <h2 className="text-center my-4">My <span style={{color: "#ED1C24"}}>Orders</span></h2>
                <Table striped bordered hover size="sm" responsive="sm">
                    <thead>
                        <tr>
                        <th>SL.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Reg. Date</th>
                        <th>Address</th>
                        <th>Service</th>
                        <th>Amount</th>
                        <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <> 
                                <tr>
                                <td>{index + 1}</td>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.date}</td>
                                <td>{order.address}</td>
                                <td>{order.title}</td>
                                <td>{order.charge}</td>
                                {
                                    order.status === 'Pending' ? <td className="text-danger fw-bold">{order.status}</td> : <td className="text-success fw-bold">{order.status}</td>
                                }
                                <td><button onClick={() => cancelOrder(order._id)} className="btn btn-sm btn-danger">Cancel</button></td>
                                </tr>
                            </>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default MyOrders;