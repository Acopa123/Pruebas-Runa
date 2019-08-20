import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeActions from '../../modules/home';
import Button from '../../components/Button';
import { Container, Regions, Img, Content, Mewtwo } from './styled';

class Home extends React.Component {
  render(){
    let regions = this.props.home.regions.results !== undefined ? this.props.home.regions.results : []
    return(
      <Container>
        <Img src="./pokedex1.png"/>

        <Content>
          <Regions>
            {
              regions.map( (region, i) => {
                return (
                  <Button key={i} href={`/region/${region.name}/${i+1}`} text={region.name}/>
                )
              })
            }
          </Regions>
          <Mewtwo src="./mewtwo.png"/>
        </Content>

      </Container>
    )
  }
}

const mapStateToProps = state => ({
  home: state.home,
  region: state.region,
  info: state.info
})

export default connect(mapStateToProps, dispatch => bindActionCreators(homeActions, dispatch))(Home)
