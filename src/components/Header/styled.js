import styled from 'styled-components';
import { Link } from "react-router-dom";

const Container = styled.div`

`;

const Nav = styled.nav`
  height: 65px;
  background-color: #ff0000;
`;

const Div = styled.div`
  height: 65px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled.div`

`;

const Img = styled.img`
  width: 150px;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
`;

const Li = styled.li`
  list-style: none;
`;

const A = styled(Link)`
  padding: 20px;
  border-bottom: 2px solid  #ff0000;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  :hover{
    border-bottom: 2px solid #ffcc03;
    transition: 0.5s;
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
`;

export { Container, Nav, Div, Logo, Img, Ul, Li, A, Form, Input, Button }
