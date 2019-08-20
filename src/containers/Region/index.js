import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as regionActions from '../../modules/region';
import { Container, Title } from './styled';

class Region extends React.Component {
  componentDidMount(){
    const {getRegion} = regionActions
    let idRegion = Number(this.props.match.params.id)
    this.props.getRegionId(idRegion)
  }

  render(){
    return(
      <Container>
        <Title>{this.props.match.params.region}</Title>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  home: state.home,
  region: state.region
})

export default connect(mapStateToProps, dispatch => bindActionCreators(regionActions, dispatch))(Region)
