import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeActions from '../../modules/home';
import Button from '../../components/Button';
import { Container, Regions, Img } from './styled';

class Home extends React.Component {
  render(){
    let regions = this.props.home.regions.results !== undefined ? this.props.home.regions.results : []
    return(
      <Container>
        <Img src="./pokedex1.png"/>
        <Regions>
          {
            regions.map( (region, i) => {
              return (
                <Button key={i} href="" text={region.name}/>
              )
            })
          }
        </Regions>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  home: state.home
})

export default connect(mapStateToProps, dispatch => bindActionCreators(homeActions, dispatch))(Home)
