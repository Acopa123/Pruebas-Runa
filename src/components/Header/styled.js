import styled from 'styled-components';

const Container = styled.div`

`;

const Nav = styled.nav`
  height: 65px;
  background-color: #ff0000;
  width: 100%;
`;

const Div = styled.div`
  height: 65px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Img = styled.img`
  width: 150px;
  @media (min-width: 300px) and (max-width: 416px) {
    width: 100px;
  }
`;

const Form = styled.form`

`;

const Input = styled.input`
  padding: 8px 10px 8px 10px;
  outline: 0;
  font-size: 16px;
  font-family: 'Indie Flower', cursive;
  color: #000;
  background-color: #fff;
  box-shadow: 1px 1px 5px #dcdcdc inset;
  border: 0;
  @media (min-width: 300px) and (max-width: 416px) {
    padding: 4px 5px 4px 5px;
    font-size: 14px;
  }
`;

const Button = styled.button`
  padding: 8px;
  outline: 0;
  font-size: 16px;
  font-family: 'Indie Flower', cursive;
  background-color: #000;
  border: 0;
  cursor: pointer;
  color: #dcdcdc;
  @media (min-width: 300px) and (max-width: 416px) {
    font-size: 11px;
  }
`;

export { Container, Nav, Div, Img, Form, Input, Button }
