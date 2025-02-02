import React from 'react'
import styled from "styled-components";

// styled-componentsの使い方
//``（バッククオート）で囲む
//3-styled.div内で記述＋propsを受け取り
const Test = styled.div<{ bg: string, textColor: string }>` 
  color: ${props => props.textColor}; 
  border: 1px solid black;
  padding: 10px;
  background: ${props => props.bg};
`

// 2-textColorを追加
const Button = ({ bg = "white", textColor = "black"}) => {
    return <Test  bg={ bg } textColor={textColor}>Button</Test>;
}

export default Button