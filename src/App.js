import React, {useState} from 'react';
import styled from 'styled-components';
import HealthMeter from './components/HealthMeter/HealthMeter.js';
import Button from './components/Button/Button.js';
import Log from './components/Log/Log.js';
import Modal from './components/Modal/Modal.js';

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
  const [opponentHealth, setOpponentHealth] = useState(300);
  const [playerHealth, setPlayerHealth] = useState(300);
  const [logArr, setLogArr] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [winner, setWinner] = useState('');
  
  const handleAttack = (isSpecial) => {
    let damageAmount = getRandomAmount(5,20);
  
    if(isSpecial) {
      damageAmount = getRandomAmount(20,40);
    }

    let healthAfterDamage = opponentHealth - damageAmount < 0 ? 0 : opponentHealth - damageAmount;
    let logMessage = 'Player used ' + (isSpecial ? 'special' : 'regular') + ' attack and did ' + damageAmount + ' damage.';

    setOpponentHealth(healthAfterDamage);
    setLogArr((logsArr) => [...logsArr, logMessage]);

    if (healthAfterDamage <= 0) {
      gameOver('Player');
    } else {
      setOpponentAttack();
    }
  }

  const setOpponentAttack = () => {
    let damageAmount = getRandomAmount(5,40);
    let healthAfterDamage = playerHealth - damageAmount < 0 ? 0 : playerHealth - damageAmount;
    let logMessage = 'Opponent attacked and did ' + damageAmount + ' damage.';
    
    setPlayerHealth(healthAfterDamage);
    setLogArr((logsArr) => [...logsArr, logMessage]);

    if ((healthAfterDamage <= 0)) {
      gameOver('Opponent');
    }
  }

  const gameOver = (thewinner) => {
      setWinner(thewinner);
      setShowModal(true);

      setLogArr((logsArr) => [...logsArr, thewinner + ' won!']);
  }

  const getRandomAmount = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const startNewGame = () => {
    setOpponentHealth(300);
    setPlayerHealth(300);
    setLogArr([]);
    setShowModal(false);
    setWinner('');
  }

  let modal = '';
  if (showModal) {
    modal = <Modal winner = {winner} onClick = {startNewGame}/>
  }

  return (
    <>
      <AppContainer>
        <h1>Street Fighter</h1>

        <SectionContainer>
          <PlayerContainer float={'left'}>
            <h3>Player</h3>
            <HealthMeter health={playerHealth}/>
          </PlayerContainer>

          <PlayerContainer float={'right'}>
            <h3>Opponent</h3>
            <HealthMeter health={opponentHealth}/>
          </PlayerContainer>
        </SectionContainer>

        <SectionContainer>
          <ButtonsContainer>
            <Button onClick={() => handleAttack(false)} color={'108fe8'} color2={'0d72b8'} hoverColor={'003EFF'}/>
            <Button onClick={() => handleAttack(true)} color={'e53030'} color2={'c91919'} hoverColor={'f7362d'}/>
          </ButtonsContainer>
          <LogContainer>
            <Log logs={logArr}/>
          </LogContainer>
        </SectionContainer>
        {modal}
      </AppContainer>
    </>
  );
}