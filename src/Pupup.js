import styled from "styled-components";
import React from "react";
import './App.css';

const PopupBox = styled.div`
 position: fixed;
  background: #00000050;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`;
const Box = styled.div`
 position: relative;
  width: 70%;
  margin: 0 auto;
  height: auto;
  max-height: 70vh;
  margin-top: calc(100vh - 85vh - 20px);
  background: #fff;
  border-radius: 4px;
  padding: 10px;
  border: 1px solid #999;
  overflow: auto;
`;

const Popup = props => {
  return (
    <PopupBox>
      <Box>
        {props.content}
      </Box>
    </PopupBox>
  );
};
 
export default Popup;