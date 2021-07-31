import React from 'react'
import { Link } from './Link'
import styled from 'styled-components';
import { tokens } from '../../data/tokens'

const DarkBackground = styled.div`
    width: 100;
  background: ${tokens.colors.blue.solid};
`;


export const Demo = () => {
    return (
        <div>
        <Link action="#">Hello World!</Link>
        <Link action={() => console.log('Fired')}>Hello World!</Link>

        <DarkBackground>
        <Link inverse action="#">Hello World!</Link>
        <Link inverse action={() => console.log('Fired')}>Hello World!</Link>
 
        </DarkBackground>
        </div>
    )
}

export default Demo