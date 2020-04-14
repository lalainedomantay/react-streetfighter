import React from 'react';
import styled from 'styled-components';

const HealthContainer = styled.div`
    background: #eee;
    border: 1px solid #aaa;
    height: 25px;
    width: 300px;
    border-radius: 10px;
`;

const HealthBar = styled.div`
    border-radius: 10px;
    background: #BDB76B;
    height: 100%;
    transition: .5s ease all;
    width: ${props => props.amount}px;
    box-shadow: inset 0 1px 1px 0px rgba(255, 215, 215, 0.5),
            inset 0 -1px 1px 0px rgba(255, 255, 255, 0.25),
            1px 1px 3px 0 rgba(0,0,0,0.33);
`;

const healthMeter = ({health}) => {
    return (
        <HealthContainer>
            <HealthBar amount = {health}></HealthBar>
        </HealthContainer>
    );
}

export default healthMeter;