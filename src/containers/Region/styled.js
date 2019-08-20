import styled from 'styled-components';
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-family: 'Indie Flower', cursive;
  color: #ffcc03;
  text-transform: uppercase;
  font-size: 40px;
  text-align: center;
  width: 30%;
`;

const List = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 79%;
`;

const Pokemon = styled(Link)`
  border: 2px solid #ecf0f1;
  border-radius: 5px;
  padding: 5px 15px 5px 15px;
  text-decoration: none;
  color: #ecf0f1;
  font-size: 13px;
  margin: 12px;
  text-transform: uppercase;
  box-shadow: 2px 2px 2px #95a5a6;
  font-weight: bold;
  :hover{
    border: 2px solid #ffcc03;
    color: #ffcc03;
    box-shadow: 0px 0px 15px #ffcc03;
    transition: .5s;
  }
`;

export { Container, Title, List, Pokemon }
