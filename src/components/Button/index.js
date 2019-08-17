import React from 'react';
import { Container } from './styled';

const Button = (props) => {
  return (
    <Container to={props.href}>
      {props.text}
    </Container>
  );
}

export default Button;
