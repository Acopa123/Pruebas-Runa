import React from 'react';

import { Container, Nav, Div, Logo, Img, Ul, Li, A, Form, Input, Button } from './styled';

const Header = (props) => {
  return (
    <Container>
      <Nav>
        <Div>
          <Logo>
            <Img src="/logo.png"/>
          </Logo>
          <Ul>
            <Li>
              <A href="#">Inicio</A>
            </Li>
            <Li>
              <A href="#">Informacion</A>
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
