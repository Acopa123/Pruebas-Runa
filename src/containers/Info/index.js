import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as infoActions from '../../modules/info';
import { Container } from './styled';

class Info extends React.Component {
  componentDidMount(){
    let idRegion = Number(this.props.match.params.id)
    this.props.getPokemonId(idRegion)
  }
  
  render(){
    return(
      <Container>

      </Container>
    )
  }
}

const mapStateToProps = state => ({
  home: state.home,
  region: state.region,
  info: state.info
})

export default connect(mapStateToProps, dispatch => bindActionCreators(infoActions, dispatch))(Info)
