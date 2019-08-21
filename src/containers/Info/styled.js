import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: #c0392b;
  text-transform: uppercase;
  font-size: 20px;
  width: 30%;
  @media (min-width: 300px) and (max-width: 670px) {
    font-size: 12px;
    width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  width: 600px;
  @media (min-width: 300px) and (max-width: 670px) {
    width: 85%;
    margin: 10px;
  }
`;

const Header = styled.div`
  border-radios: 5px;
  border: 1px solid #bdc3c7;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (min-width: 300px) and (max-width: 670px) {
    flex-direction: column;
  }
`;

const Body = styled.div`
  border-radios: 5px;
  border: 1px solid #bdc3c7;
  width: 100%;
  padding: 10px;
`;

const Description = styled.p`
  color: #ecf0f1;
  text-align: justify;
`;

const Span = styled.span`
  color: #bdc3c7;
  text-transform: uppercase;
  font-weight: bold;
`;

const Img = styled.img`
  margin: 0px 10px 0px 10px;
`;

const NoFound = styled.h1`
  color: #c0392b;
  text-transform: uppercase;
  font-size: 40px;
  text-align: center;
`;

export { Container, Title, Content, Header, Body, Description, Span, Img, NoFound }
