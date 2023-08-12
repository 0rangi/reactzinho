import React from "react";
import * as S from "./styles"
import Logo from "../../assets/Ellipse 4.png"

export function Header() {
  return (
    <S.Header>
      <picture>
        <img src={Logo} alt="Logo" />
      </picture>
      <S.NavBar>
      
  <a className="inicial" href="index.html"> 
<img src="img/Ellipse 4.png" />
  </a>
 
    <ul>
      <li>
        <a className="novidades" href="./pages/novidades.html">Novidades! </a>
      </li>
      <li>
        <a href="">Cadastrar-se</a>
      </li>
      <li>
        <a className="entrar " href="">Entrar</a>
      </li>
    </ul>



      </S.NavBar>
    </S.Header>
  )
}