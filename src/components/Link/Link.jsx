import React from 'react'
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { Text } from '../Text'
import { tokens } from '../../data/tokens'
/**
 *
 * @typedef {object} props
 * @property {JSX.Element} children
 * @property {boolean} inverse
 * @property {string | function} action
 */

/**
 * @param {props} props
 * @return {JSX.Element.Element}
 */

const Base = styled.button`
    padding: 0;
    margin: 0;
    background: none;
    text-decoration: underline;
    border-width: 0;
    color: ${({ inverse }) => inverse ? `rgba(${tokens.colors.white}, ${tokens.opacity.stronger})`
    : `rgba(${tokens.colors.black}, ${tokens.opacity.strong})`
    };
`

export const Link = (props) => {
    const { action, children, inverse } = props;

    if (typeof action !== 'string') return (
        <Base inverse={inverse} as="button" onClick={action}><Text inverse={inverse} size="s">{children}</Text></Base>
    )

    return (
        <Base inverse={inverse} as={RouterLink} component="a" to="RouterLink"><Text inverse={inverse} size="s">{children}</Text></Base>
    )
}

export default Link