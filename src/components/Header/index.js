import React from 'react';
import { Link } from "react-router-dom";
import { Container, Nav, Div, Img, Ul, Li, A, Form, Input, Button } from './styled';

const Header = (props) => {
  return (
    <Container>
      <Nav>
        <Div>
          <Link to="/">
            <Img src="/logo.png"/>
          </Link>
          <Ul>
            <Li>
              <A to="/">Inicio</A>
            </Li>
            <Li>
              <A to="#">Informacion</A>
            </Li>
          </Ul>
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
