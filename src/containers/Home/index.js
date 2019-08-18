import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeActions from '../../modules/home';
import Button from '../../components/Button';
import { Container, Regions, Img } from './styled';

class Home extends React.Component {
  render(){
    console.log(this.props.home);
    return(
      <Container>
        <Img src="./pokedex1.png"/>
        <Regions>
          <Button href="/test" text="kanto"/>
        </Regions>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  home: state.home
})

export default connect(mapStateToProps, dispatch => bindActionCreators(homeActions, dispatch))(Home)
