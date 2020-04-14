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

const Score = styled.span`
  margin-left: 2px;
`;

function App() {
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
            <Score>100</Score>
          </PlayerContainer>

          <PlayerContainer float={'right'}>
            <h3>Opponent</h3>
            <HealthMeter health={25}/>
            <Score>25</Score>
          </PlayerContainer>
        </SectionContainer>

        <SectionContainer>
          <ButtonsContainer>
            <Button color1={'108fe8'} color2={'0d72b8'} />
            <Button color1={'e53030'} color2={'c91919'} />
          </ButtonsContainer>
          <LogContainer>
            <Log logs={logArr}/>
          </LogContainer>
        </SectionContainer>
      </AppContainer>
    </>
  );
}

export default App;
