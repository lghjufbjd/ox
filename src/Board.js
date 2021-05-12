import React, { PureComponent } from "react";
import styled from "styled-components";
import Cell from "./Cell";
import Popup from "./Pupup";
import "./App.css";

const Wrapper = styled.div`
  height: 100vh;
  background-color: #17191a;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . ."
    ". . ."
    ". . .";
  height: 450px;
  width: 450px;
`;

class Board extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      winner: "",
      turn: "x",
      isOpen: false,
      boardMap: ["", "", "", "", "", "", "", "", ""],
    };
  }
  setBoardMap = (editedBoardMap) => {
    this.setState({ boardMap: editedBoardMap });
  };
  togglePopup = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  restart = () => {
    this.setState({ winner: "" });
    this.setState({ boardMap: ["", "", "", "", "", "", "", "", ""] });
    this.setState({ turn: "x" });
  };
  checkWin = () => {
    let drawCheck = 1;
    [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ].forEach((combination) => {
      ["x", "o"].forEach((symbol) => {
        if (
          combination.every(
            (stateIndex) => this.state.boardMap[stateIndex] === symbol
          )
        ) {
          this.togglePopup();
          this.setState({ winner: symbol });
        }
      });
    });
    this.state.boardMap.forEach(symbol => {
      if(symbol=="")
      {
        drawCheck=0
      }
    })
    if(drawCheck == 1)
    {
      this.togglePopup();
      this.setState({ winner: "draw" });
    }
  };

  toggleTurn = () => {
    this.state.turn == "o"
      ? this.setState({ turn: "x" })
      : this.setState({ turn: "o" });
  };
  renderCells = () => {
    let cellsList = [];
    for (let i = 0; i < 9; i++) {
      cellsList[i] = (
        <Cell
          checkWin={this.checkWin}
          boardMap={this.state.boardMap}
          setBoardMap={this.setBoardMap}
          id={i}
          turn={this.state.turn}
          toggleTurn={this.toggleTurn}
        />
      );
    }
    return cellsList;
  };
  render() {
    return (
      <>
        <Wrapper>
          {this.state.isOpen ? (
            <>
              <Popup
                content={
                  <>
                    <p>{(this.state.winner=="draw") ? "draw" : this.state.winner+" wins"}</p>
                    <button
                      onClick={() => {
                        this.togglePopup();
                        this.restart();
                      }}
                    >
                      restart
                    </button>
                  </>
                }
              />
            </>
          ) : null}
          <BoardWrapper>{this.renderCells()}</BoardWrapper>
        </Wrapper>
      </>
    );
  }
}

export default Board;
