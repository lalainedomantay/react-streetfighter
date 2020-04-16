import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Overlay = styled.div`
    background: rgba(190, 0, 0, 0.6);
    left: 0;
    height: 100%;
    position: fixed;
    top: 0;
    width: 100%; 
`;

const ModalBody = styled.div`
    background: white;
    box-shadow: 0 0 10px darkred;
    left: 50%;
    max-width: 600px;
    margin: 0 auto;
    min-height: 100px;
    padding: 40px;
    position: fixed;
    top: 50%;
    transform: translate(-50%,-50%);
`;

const ModalClose = styled.div`
    font-size: 24px;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
`;

export default function Modal ({winner, onClick}) {
    return (
        <Overlay>
            <ModalBody>
                <ModalClose onClick={onClick}>x</ModalClose>
                {winner} won. Play again?
            </ModalBody>
        </Overlay>
    )
}

Modal.propTypes = {
    onClick: PropTypes.func,
    winner: PropTypes.string 
};