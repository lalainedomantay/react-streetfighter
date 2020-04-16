import React from "react";
import styled from 'styled-components';

const RoundButton = styled.button`
    background: #${props => props.color};
    border: 3px solid #fff;
    border-radius: 100%;
    box-shadow: 0 -2px 0 3px #${props => props.color2} inset, 0 5px 5px rgba(3, 25, 41, 0.17), 0 15px rgba(255, 255, 255, 0.25) inset;
    cursor: pointer;
    display: inline-block;
    height: 75px;
    width: 75px;
    :hover {
        background:#${props => props.hoverColor};
    }
`;

const button = ({color,color2,hoverColor,onClick}) => {
    return (
        <RoundButton color={color} color2={color2} hoverColor={hoverColor} onClick={onClick} />
    )
}

export default button;