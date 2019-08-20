import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as infoActions from '../../modules/info';
import { Container, Title, Content, Header, Body, Description, Span, Img } from './styled';

class Info extends React.Component {
  componentDidMount(){
    let idRegion = Number(this.props.match.params.id)
    this.props.getPokemonId(idRegion)
  }

  render(){
    let pokemon = this.props.info.info
    let description = pokemon.description !== undefined ? pokemon.description : []
    let images = pokemon.images !== undefined ? Object.keys(pokemon.images) : []

    return(
      <Container>
        <Content>
          <Header>
            <Title>{pokemon.name}</Title>
            <Title>{pokemon.generation}</Title>
          </Header>
          <Body>
            {
              images.map((image, i) => {
                return(
                  <Img key={i} src={pokemon.images[image]}/>
                )
              })
            }
            {
              description.map((description, i) => {
                return(
                  <Description key={i}><Span>Version {description.version.name}:</Span> {description.flavor_text}</Description>
                )
              })
            }
          </Body>
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

export default connect(mapStateToProps, dispatch => bindActionCreators(infoActions, dispatch))(Info)
