import React from 'react';
import * as S from './styles'
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"

export function Home() {
  return (
    <S.Section>
      <img className='imga' src={image1} alt="doces e bolos" />
      <img src={image2} alt="quitutes e biscoitos" />
    </S.Section>
  )
}
