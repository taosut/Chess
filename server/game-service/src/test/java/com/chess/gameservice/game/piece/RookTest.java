package com.chess.gameservice.game.piece;

import com.chess.gameservice.game.board.Board;
import com.chess.gameservice.game.player.PlayerColor;
import com.chess.gameservice.game.position.Position;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.*;

class RookTest {
    private Board board;

    @BeforeEach
    void setUp() {
        var testBoard = new Piece[8][8];
        board = new Board();
        board.setState(testBoard);
    }

    @Test
    void getAvailableMoves() {
        var rook = new Rook(PlayerColor.BLACK);
        var rookPosition = new Position(4, 4);
        var expectedMoves = new ArrayList<Position>();
        int[] positionsX = {5, 6, 7, 4, 4, 4, 3, 2, 1, 0, 4, 4, 4, 4};
        int[] positionsY = {4, 4, 4, 5, 6, 7, 4, 4, 4, 4, 3, 2, 1, 0};
        for (int i = 0; i < positionsX.length; i++) {
            expectedMoves.add(new Position(positionsX[i], positionsY[i]));
        }

        var availableMoves = rook.getAvailableMoves(board, rookPosition);

        assertArrayEquals(expectedMoves.toArray(), availableMoves.toArray());
    }

    @Test
    void getAvailableMovesPathBlocked() {
        var boardWithPathBlocked = board.getState();
        boardWithPathBlocked[6][4] = new Rook(PlayerColor.BLACK);
        boardWithPathBlocked[4][7] = new Rook(PlayerColor.BLACK);
        boardWithPathBlocked[4][2] = new Rook(PlayerColor.BLACK);
        board.setState(boardWithPathBlocked);

        var rook = new Rook(PlayerColor.BLACK);
        var rookPosition = new Position(4, 4);
        var expectedMoves = new ArrayList<Position>();
        int[] positionsX = {5, 4, 4, 3, 2, 1, 0, 4};
        int[] positionsY = {4, 5, 6, 4, 4, 4, 4, 3};
        for (int i = 0; i < positionsX.length; i++) {
            expectedMoves.add(new Position(positionsX[i], positionsY[i]));
        }

        var availableMoves = rook.getAvailableMoves(board, rookPosition);

        assertArrayEquals(expectedMoves.toArray(), availableMoves.toArray());
    }

    @Test
    void isMoveLegalXAxis() {
        var currentPosition = new Position(4, 1);
        var rook = new Rook(PlayerColor.BLACK);

        var destinationPositionLegal = new Position(7, 1);
        assertTrue(rook.isMoveLegal(currentPosition, destinationPositionLegal, board));

        var destinationPositionIllegal = new Position(7, 2);
        assertFalse(rook.isMoveLegal(currentPosition, destinationPositionIllegal, board));

    }

    @Test
    void isMoveLegalYAxis() {
        var currentPosition = new Position(4, 1);
        var rook = new Rook(PlayerColor.BLACK);

        var destinationPositionLegal = new Position(4, 6);
        assertTrue(rook.isMoveLegal(currentPosition, destinationPositionLegal, board));

        var destinationPositionIllegal = new Position(5, 7);
        assertFalse(rook.isMoveLegal(currentPosition, destinationPositionIllegal, board));

    }
}