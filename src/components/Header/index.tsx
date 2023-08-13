import React from "react";
import * as S from "./styles"
import Logo from "../../assets/Ellipse 4.png"


export function Header() {
  return (
    <S.Header>
     

      <picture>
      <img className="logo" src={Logo} alt="Logo" />  
      </picture>
      <S.NavBar>
      




  <>
  <input id="menu-toggle" type="checkbox" />
  <label htmlFor="menu-toggle">
    <div className="menu-hamburger">
      <span className="hamburger" />
    </div>
  </label>
  <ul className="ul">
    <li>
      <a className="novidades" href="/menu"> Novidades! </a>
    </li>
    <li>
      <a href=""> Cadastrar-se</a>
    </li>
    <li>
      <a className="entrar " href=""> Entrar
      </a>
    </li>
  </ul>
</>




      </S.NavBar>

    </S.Header>
  )
}