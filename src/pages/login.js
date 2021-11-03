import React from 'react';
import styled from 'styled-components';
import {Form,Button} from 'react-bootstrap';

const Layout=styled.div`
    width: 80%;
    margin: 128px auto;
    
    & button {
        width: 100%;
        font-weight: 500;
    }
    & #signup {
        font-weight: 500;
        text-align: center;
        text-decoration: underline;
        font-size: small;
        color: blue;
        width: fit-content;
        margin: auto;

        &:hover {
            cursor: pointer;
        }
    }
`;

export default function Login({onClick}){

    return <Layout>
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" onClick={(e)=>{e.preventDefault();onClick()}}>
                SIGN IN
            </Button>
            <div id='signup'>SIGN UP ?</div>
        </Form>
    </Layout>
}