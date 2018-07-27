import React from 'react';
import {Container, Form, FormGroup, Input, Label} from "reactstrap";


export default class Contact extends React.Component {
    render() {
        return (
            <Container>
                <h1 className={'mt-4'}>Formulario de contacto</h1>
                <p>Eleatess studere in cirpi!</p>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="text" name="reason" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Text Area</Label>
                        <Input type="textarea" name="body" id="exampleText" />
                    </FormGroup>
                </Form>
            </Container>
        )
    }
}
