import React from 'react';
import styled from '@emotion/styled';
import { PieceType } from '../../../../interfaces/piece';
import { BoardPosition } from '../../../../interfaces/boardPosition';
import { PlayerColor } from '../../../../interfaces/player';
import PieceIcon from './PieceIcon';
import { useDrop } from 'react-dnd';
import { DragAndDropTypes } from '../../../../contants/dragAndDropTypes';
import { CheckState } from '../../../../interfaces/checkState';

interface StyledCellProps {
  isChecked: boolean;
}

const StyledCell = styled.div<StyledCellProps>`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:nth-of-type(16n + 1),
  &:nth-of-type(16n + 3),
  &:nth-of-type(16n + 5),
  &:nth-of-type(16n + 7),
  &:nth-of-type(16n + 10),
  &:nth-of-type(16n + 12),
  &:nth-of-type(16n + 14),
  &:nth-of-type(16n + 16) {
    background: black;
  }
  background: ${props => {
    if (props.isChecked) {
      return 'red !important';
    }
    return 'white';
  }};
`;

interface StyledOverlayProps {
  isSelected: boolean;
  isMoveAvailable: boolean;
}

const StyledOverlay = styled.div<StyledOverlayProps>`
  position: absolute;
  width: 25%;
  height: 25%;
  border-radius: 50%;
  background: ${props => {
    if (props.isSelected) {
      return 'lightgreen';
    }
    if (props.isMoveAvailable) {
      return 'blue';
    }
    return 'none';
  }};
`;

interface CellProps {
  type: PieceType;
  isSelected: boolean;
  isMoveAvailable: boolean;
  getAvailableMoves: (position: BoardPosition) => void;
  position: BoardPosition;
  makeMove: (position: BoardPosition) => void;
  pieceColor: PlayerColor;
  currentTurn: PlayerColor;
  checkState: CheckState;
}

const Cell: React.FC<CellProps> = ({
  type,
  getAvailableMoves,
  position,
  isSelected,
  isMoveAvailable,
  makeMove,
  checkState,
  currentTurn,
  pieceColor,
}) => {
  const handleOnClick = React.useCallback(() => {
    if (isMoveAvailable) {
      makeMove(position);
    } else {
      getAvailableMoves(position);
    }
  }, [position]);

  const [{}, drop] = useDrop({
    accept: DragAndDropTypes.PIECE,
    canDrop: () => isMoveAvailable,
    drop: () => makeMove(position),
  });

  function onDragBegin() {
    getAvailableMoves(position);
  }

  const isChecked =
    checkState !== CheckState.NONE &&
    currentTurn === pieceColor &&
    type === PieceType.KING;

  return (
    <StyledCell onClick={handleOnClick} ref={drop} isChecked={isChecked}>
      {type && (
        <PieceIcon
          onDragBegin={onDragBegin}
          pieceColor={pieceColor}
          type={type}
        />
      )}
      <StyledOverlay
        isSelected={isSelected}
        isMoveAvailable={isMoveAvailable}
      />
    </StyledCell>
  );
};

export default Cell;