import React from 'react';
import { Link } from "react-router-dom";
import { Container, Nav, Div, Img, Form, Input, Button } from './styled';

function request(event, props){
  event.preventDefault()
  let value = event.target[0].value
  if (value !== '') {
    props.history.push(`/pokemon/info/${value}`)
    window.location.reload()
  }
}

const Header = (props) => {
  return (
    <Container>
      <Nav>
        <Div>
          <Link to="/">
            <Img src="/logo.png"/>
          </Link>
          <Form onSubmit={(e) => request(e, props)}>
            <Input type="text" placeholder="Pikachu"/>
            <Button type="submit">Buscar</Button>
          </Form>
        </Div>
      </Nav>
    </Container>
  );
}

export default Header;
