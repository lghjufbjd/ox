import React, { PureComponent } from "react";
import styled from "styled-components";
import ximg from "./x.png";
import oimg from "./o.png";
import './App.css';

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 150px;
  height: 150px;
  background-color: #fbfbfb;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
`;
const Symbol = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => ((props.shape == "o") ? oimg : props.shape == "x" ? ximg : 0) });
  background-position: center;
  background-size: cover;
`;
class Cell extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
    clickHandler = () => {
        if(this.props.boardMap[this.props.id] == "")
        {
            let tempBoardMap = this.props.boardMap;
            tempBoardMap[this.props.id] = this.props.turn;
            this.props.setBoardMap(tempBoardMap);
            this.props.toggleTurn();
            this.props.checkWin();
        }
        
    }
  render() {
    return (
      <>
        <Wrapper>
          <Symbol onClick={this.clickHandler} shape={this.props.boardMap[this.props.id]} />
        </Wrapper>
      </>
    );
  }
}

export default Cell;
