import React from 'react';
import styled from 'styled-components';
import HealthMeter from './components/HealthMeter/HealthMeter.js';
import Button from './components/Button/Button.js';
import Log from './components/Log/Log.js';

const AppContainer = styled.div`
  width: 650px;
  text-align: center;
  margin: auto;
`;

const SectionContainer = styled.div`
  margin-bottom: 50px;
  width: 100%;
  float: left;
`;

const PlayerContainer = styled.div`
  float: ${props => props.float};
  text-align: left;
`;

const ButtonsContainer = styled.div`
  float: left;
`;

const LogContainer = styled.div`
  width: 300px;
  float: right;
`;


export default function App() {
  let logArr = [];

  logArr.push('Player used regular attack and did 10 damage.');
  logArr.push('Opponent used special attack and did 50 damage.');

  return (
    <>
      <AppContainer>
        <h1>Street Fighter</h1>

        <SectionContainer>
          <PlayerContainer float={'left'}>
            <h3>Player</h3>
            <HealthMeter health={100}/>
          </PlayerContainer>

          <PlayerContainer float={'right'}>
            <h3>Opponent</h3>
            <HealthMeter health={25}/>
          </PlayerContainer>
        </SectionContainer>

        <SectionContainer>
          <ButtonsContainer>
            <Button color={'108fe8'} color2={'0d72b8'} hoverColor={'003EFF'}/>
            <Button color={'e53030'} color2={'c91919'} hoverColor={'f7362d'}/>
          </ButtonsContainer>
          <LogContainer>
            <Log logs={logArr}/>
          </LogContainer>
        </SectionContainer>
      </AppContainer>
    </>
  );
}