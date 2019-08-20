import React from 'react';
import { Wrapper, Gif } from './styled';

const Loading = (props) => {
    return(
      <Wrapper show={props.loading}>
        <Gif src='/loading.gif' />
      </Wrapper>
    )
}

export default Loading;
