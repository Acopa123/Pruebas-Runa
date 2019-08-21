import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: ${(props)=> props.show ? 'flex' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Gif = styled.img`
  width: 150px;
`;

export { Wrapper, Gif }
