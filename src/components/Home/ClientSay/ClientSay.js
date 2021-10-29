import React from 'react';
import { Card } from 'react-bootstrap';
import './ClientSay.css';

const ClientSay = () => {
    return (
        <div className="my-5">
            <h1 className="text-center mb-4">Our <span style={{color: "#ED1C24"}}>Client Say!</span></h1>
            <div className="container">
                <div className="row ms-4">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                    <Card style={{ width: '18rem' }} className="card-area">
                        <Card.Img variant="top" src="https://www.theredx.com/wp-content/uploads/2018/06/Headshot-Len-Nevin_EDIT.jpg" />
                        <Card.Body>
                            <Card.Title>Jhon Doe</Card.Title>
                            <Card.Text>
                           <p>REDX is a software company that provides real estate agents with the highest quality homeowner lead data through our Vortex® prospecting platform.</p>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                    <Card style={{ width: '18rem' }} className="card-area">
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmROiMwLilbik8Y5pyI61i-aMPAgycd3joG3ZpLKxwhWks82ws_1mAh6athE1xt_5SqY&usqp=CAU" />
                        <Card.Body>
                            <Card.Title>Larry Gomez</Card.Title>
                            <Card.Text>
                           <p>REDX is a software company that provides real estate agents with the highest quality homeowner lead data through our Vortex® prospecting platform.</p>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                    <Card style={{ width: '18rem' }} className="card-area">
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo3ghoLMeQwpXOH2I1qEdxI0sR6m8iFnbHt-jbsVEeTSILQwo89jI7tVJkIzXHn4NzIf8&usqp=CAU" />
                        <Card.Body>
                            <Card.Title>Harry Porter</Card.Title>
                            <Card.Text>
                           <p>REDX is a software company that provides real estate agents with the highest quality homeowner lead data through our Vortex® prospecting platform.</p>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientSay;