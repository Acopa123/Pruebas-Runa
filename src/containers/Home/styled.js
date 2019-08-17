import styled from 'styled-components';

const Container = styled.div`
  height: 89.8vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Regions = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 60px 0px 0px 0px;
`;

const Img = styled.img`
  width: 300px;
  margin: 60px 0px 60px 0px;
`;

export { Container, Regions, Img }
