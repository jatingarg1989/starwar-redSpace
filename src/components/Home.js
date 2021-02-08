
import React from 'react';
import {Menu, Container} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';

//npm install react-bootstrap-validation --save




export default function Home(){
    return (
            <Container>
                <Link to='/people'> <Button variant="primary" size="sm">People</Button>{' '}</Link>
                <Link to='/planets'><Button variant="primary" size="sm">Planets</Button>{' '}</Link>
                <Link to='/movies'><Button variant="primary" size="sm">Movies</Button>{' '}</Link>
            </Container>
    )

}