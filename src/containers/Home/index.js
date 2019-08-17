import React from 'react';
import Button from '../../components/Button';
import { Container, Regions } from './styled';

class Home extends React.Component {
  render(){
    return(
      <Container>
        <Regions>
          <Button href="/test" text="kanto"/>
          <Button href="/test" text="johto"/>
          <Button href="/test" text="hoenn"/>
          <Button href="/test" text="sinnoh"/>
          <Button href="/test" text="unova"/>
          <Button href="/test" text="kalos"/>
          <Button href="/test" text="alola"/>
        </Regions>
      </Container>
    )
  }
}

export default Home;
