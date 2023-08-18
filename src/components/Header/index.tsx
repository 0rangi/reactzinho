import React from "react";
import * as S from "./styles"
import Logo from "../../assets/Ellipse 4.png"


export function Header() {
  return (
    <S.Header>
     

      <picture>
    
      <a href="/"  rel="noreferrer">
        <img className="logo" src={Logo} alt="Logo"></img>
      </a>

      </picture>
      <S.NavBar>
      




  <>



  <ul className="ul">

  <li>
      <a className="inicial " href="/"> Página inicial
      </a>
    </li>
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