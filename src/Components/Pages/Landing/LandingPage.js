
import React, { useState ,} from 'react'
import { Col, Row } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import Video from '../../Videos/golfcourse.mp4';
import '../Landing/LandingPage.css';

export default function LandingPage() {
        
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    
    return (
        <div>
            <video
                autoPlay
                muted
                loop
                 style={{
            position: 'fixed',
            width: '100%',
            left: '50%',
            top: '50%',
            height: '100%',
            objectFit: 'inherit',
            transform: 'translate(-50%, -50%)',
            zIndex: '-1',
          }}
            >
            <source src={Video} type="video/mp4" />
            </video>
            <Row>
                <Col sm={6}>
                    <p className="title shadow-md mx-3 ">Experience A New Way Of Competition
                    </p>
                    <span className="subtitle shadow-md  mx-3">Challenge your friends in the biggest golf competitions of the season and create
                    your own piece of history. 
                    </span>
                </Col>
                <Col sm={5}>
                <Form className="LoginForm border shadow-lg rounded bg-light mx-2 mb-4 ">
                        <Form.Row>
                            <h1 className="text-secondary"> Login
                              <Button id="register" className="text-light px-2 " variant="danger" onClick={handleShow}>Register Here</Button>  
                            </h1>
                            
                            
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label className="text-dark">Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label className="text-dark">Password</Form.Label>
                                <Form.Control className="btn-blo" type="password" placeholder="Password" />
                                <a id="forgotpassword" variant="primary" onClick={handleShow}>forgot password?</a>
                                <Modal centered show={show} onHide={handleClose}>
                                    <Modal.Header >
                                    <Modal.Title>Find Your Account</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        {/* <Alert show={show}variant="success">
                                            <Alert.Heading>Success!</Alert.Heading>
                                            <p>You will recieve a link in your inbox to reset your password</p>
                                        </Alert> */}
                                        <Modal.Body className="text-center">Enter your email to search for your account</Modal.Body>
                            <Form.Control type="email" placeholder="Email" />
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" >
                                        Submit
                                    </Button>
                                    </Modal.Footer>
                                </Modal>
                        </Form.Group>
                    </Form.Row>

                    <Button className=" mt-2" variant="warning" type="login">
                            Login
                    </Button>
                       
                    </Form>
                </Col>
            </Row>
        </div>
        
    )
}
