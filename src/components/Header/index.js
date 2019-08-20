import React from 'react';
import { Link } from "react-router-dom";
import { Container, Nav, Div, Img, Form, Input, Button } from './styled';

const Header = (props) => {
  return (
    <Container>
      <Nav>
        <Div>
          <Link to="/">
            <Img src="/logo.png"/>
          </Link>
          <Form>
            <Input type="text" placeholder="Pikachu"/>
            <Button type="submit">Buscar</Button>
          </Form>
        </Div>
      </Nav>
    </Container>
  );
}

export default Header;
