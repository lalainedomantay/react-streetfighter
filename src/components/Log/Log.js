import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    text-align: left;
    padding: 5px 15px;
    min-height: 200px;
    width: 300px;
    -webkit-box-shadow: 12px 12px 5px -5px rgba(0,0,0,0.14);
    -moz-box-shadow: 12px 12px 5px -5px rgba(0,0,0,0.14);
    box-shadow: 12px 12px 5px -5px rgba(0,0,0,0.14);
    background-color: #f5f5f5;
`;

const log = ({logs}) => {
    return (
        <Container>
            <h3>Log</h3>
            <ul>
                {logs.map((logText, index) =>{
                    return <li>{logText}</li>;
                })}
            </ul>
        </Container>
    )
}

export default log;