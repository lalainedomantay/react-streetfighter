import React from "react";
import styled from 'styled-components';

const RoundButton = styled.div`
    background: #${props => props.color1};
    border: 3px solid #fff;
    border-radius: 100%;
    box-shadow: 0 -2px 0 3px #${props => props.color2} inset, 0 5px 5px rgba(3, 25, 41, 0.17), 0 15px rgba(255, 255, 255, 0.25) inset;
    cursor: pointer;
    display: inline-block;
    height: 75px;
    width: 75px;
`;

const button = ({color1,color2}) => {
    return (
        <RoundButton color1={color1} color2={color2} />
    )
}

export default button;