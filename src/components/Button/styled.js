import styled from 'styled-components';
import { Link } from "react-router-dom";

const Container = styled(Link)`
  border: 2px solid #ecf0f1;
  border-radius: 5px;
  padding: 5px 15px 5px 15px;
  text-decoration: none;
  color: #ecf0f1;
  font-size: 30px;
  font-family: 'Indie Flower', cursive;
  box-shadow: 2px 2px 2px #95a5a6;
  font-weight: bold;
  margin: 8px;
  :hover{
    border: 2px solid #ffcc03;
    color: #ffcc03;
    box-shadow: 0px 0px 15px #ffcc03;
    transition: .5s;
  }
`;

export { Container }
