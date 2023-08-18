import React from 'react';
import * as S from "./styles"
import background from "../../assets/lilac.png"

export function Footer() {
  return (
    <S.Footer>
 <img className="lilac" src={background} alt="Lilac"></img>
    </S.Footer>
  )
}