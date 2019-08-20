import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Regions = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Img = styled.img`
  width: 300px;
  margin: 60px 0px 0px 0px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Mewtwo = styled.img`
  width: 30%;
`;

export { Container, Regions, Img, Mewtwo, Content }
