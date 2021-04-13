import React from 'react';
import { Container, Row, Col, Card, CardBody, FormGroup, Alert, Form, Input, Button, FormFeedback, Label, InputGroup, InputGroupAddon } from 'reactstrap';
import Link from 'next/link';






export default function Custom404() {
  
    return (

        <React.Fragment>

            <div className="account-pages my-5 pt-sm-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8} lg={6} xl={5} >
                            <div className="text-center mb-4">
                                <Link href="/" passHref className="auth-logo d-block">
                                    <img src="/images/practxLogo-dark.png" alt="Practx logo dark" height="100" className="logo logo-dark"/>
                                </Link>

                                <h4 className="mt-3"> PAGE NOT FOUND</h4>
                                <p className="text-muted mb-4">Please check the URL you entered if its correct!</p>
                                
                            </div>


                            <Card>
                                <CardBody className="p-4">
                                    <div className="p-3">
                                        
                                        <p className="display-3 justify-content-center" > Error 404! </p>
                                            
                                    </div>
                                </CardBody>
                            </Card>

                        <div className="mt-5 text-center">
                            <p>Return to home <Link href="/" className="font-weight-medium text-primary"> Signin </Link> </p>
                            <p>© 2020 Practx. Crafted with <i className="mdi mdi-heart text-danger"></i> by ReverSoftwares </p>
                        </div>

                            

                        </Col>
                    </Row>
                </Container>
            </div>

        </React.Fragment>

    )
}
