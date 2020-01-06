import React from 'react';
import { GameContainerProps } from './Game.container';
import Graveyard from './Graveyard/Graveyard';
import { PlayerColor } from '../../../interfaces/player';
import Board from './Board/Board';
import PromotionMenu from './PromotionMenu/PromotionMenu';
import styled from '@emotion/styled';
import GameOverMenu from './GameOverMenu/GameOverMenu';
import { GamePhase } from '../../../interfaces/game';
import Timer from './Timer/Timer';
import { Prompt } from 'react-router-dom';
import ForfeitGame from './ForfeitGame/ForfeitGame';

const StyledContainer = styled.div`
  margin: 0 auto;
`;

interface Props extends GameContainerProps {}

const Game: React.FC<Props> = ({
  gameState,
  getAvailableMoves,
  selectedPosition,
  availableMoves,
  makeMove,
  isCurrentTurn,
  promotePawn,
  closeGame,
  userColor,
  forfeitGame,
}) => {
  const positionAwaitingPromotion = gameState.board.positionAwaitingPromotion;
  const graveyards = gameState.board.graveyards;
  const currentPlayerColor = gameState.currentTurn.currentPlayerColor;
  const gamePhase = gameState.gamePhase;
  const isPromotionShown = positionAwaitingPromotion && isCurrentTurn;
  const players = gameState.players;
  const checkState = gameState.board.checkState;
  const currentTurn = gameState.currentTurn;
  return (
    <StyledContainer>
      <Prompt
        when={gamePhase !== GamePhase.GAME_OVER}
        message="Are sure you want to leave the game??"
      />
      {userColor === PlayerColor.BLACK && (
        <ForfeitGame forfeitGame={forfeitGame} />
      )}
      <Timer
        isActive={
          currentTurn.turnNumber !== 0 &&
          currentTurn.currentPlayerColor === PlayerColor.BLACK &&
          gamePhase !== GamePhase.GAME_OVER
        }
        totalTurnTimeRemaining={
          players[PlayerColor.BLACK].totalTurnTimeRemaining
        }
      />
      <Graveyard pieces={graveyards.blackGraveyard} />
      <Board
        boardState={gameState.board.state}
        getAvailableMoves={getAvailableMoves}
        availableMoves={availableMoves}
        makeMove={makeMove}
        selectedPosition={selectedPosition}
        checkState={checkState}
        currentPlayerColor={currentPlayerColor}
      />
      <PromotionMenu
        isShown={isPromotionShown}
        playerColor={currentPlayerColor}
        positionAwaitingPromotion={positionAwaitingPromotion}
        promotePawn={promotePawn}
      />
      <GameOverMenu
        isShown={gamePhase === GamePhase.GAME_OVER}
        closeGame={closeGame}
      />
      <Graveyard pieces={graveyards.whiteGraveyard} />
      <Timer
        isActive={
          currentTurn.turnNumber !== 0 &&
          currentTurn.currentPlayerColor === PlayerColor.WHITE &&
          gamePhase !== GamePhase.GAME_OVER
        }
        totalTurnTimeRemaining={
          players[PlayerColor.WHITE].totalTurnTimeRemaining
        }
      />
      {userColor === PlayerColor.BLACK && (
        <ForfeitGame forfeitGame={forfeitGame} />
      )}
    </StyledContainer>
  );
};

export default Game;
