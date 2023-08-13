import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"



export const Header = styled.header`
  


  background: ${colors.primary};
  background-image: "../../assets/lilac.png" ;
  background-repeat: no-repeat;
  background-position: center center;
  height: 7rem;
  display: flex;
  width: 100vw;
 
  .logo {
    padding: 1.5rem 0rem 2rem 1.5rem;
  }



`

export const NavBar = styled.nav`
  /* Navegação */
  display: flex;
  align-items: center;
  width: 100%;

  left: 0.6rem;
  justify-content: right;
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    height: 100%;
    li {
      padding: 1rem;
      height: 100%;
      display: flex;
      align-items: center;
      a {
        text-decoration:underline ${colors.secondary};
       
      }
    }
    
    li:hover {
      text-decoration: underline ${colors.primary};
  background-color: ${colors.secondary};
    }

    .entrar {
  font-weight: bold;
  font-size: 1.5rem;
  left: 0.6rem;
}

.novidades {

text-decoration: underline ${colors.secondary};
}

  }


header nav input#menu-toggle {
  display: none;

}

@media (max-width: 1010px) {
  header nav {
      position: fixed;
      margin-top: 1rem;
      align-items: baseline;

  }

  header nav ul {
      display: none;
      background-color: var(--third);
  }

  header nav ul li {
      text-align: left;
  }

  header nav label[for="menu-toggle"] {
      display: flex;
      justify-content: flex-end;
      cursor: pointer;
  }

  header nav label[for="menu-toggle"] div.menu-hamburger {
      width: 35px;
      height: 15px;
      margin: 40px 10px 5px 5px;
  }

  header nav label[for="menu-toggle"] div.menu-hamburger span.hamburger {
      position: relative;
      display: block;
      background-color: var(--black);
      width: 30px;
      height: 2px;
  }

  header nav label[for="menu-toggle"] div.menu-hamburger span.hamburger:before,
  header nav label[for="menu-toggle"] div.menu-hamburger span.hamburger:after {
      position: absolute;
      display: block;
      background-color: var(--black);
      width: 100%;
      height: 100%;
      content: "";
  }

  header nav label[for="menu-toggle"] div.menu-hamburger span.hamburger:before {
      top: -10px;
  }

  header nav label[for="menu-toggle"] div.menu-hamburger span.hamburger:after {
      bottom: -10px;
  }

  header nav input:checked ~ul {
      display: block;
      animation: fade-in 1s;
  }

  header nav input:checked ~label[for="menu-toggle"] div.menu-hamburger span.hamburger {

      transform: rotate(45deg);
      transition: 0.5s ease-in-out;

  }

  header nav input:checked ~label[for="menu-toggle"] div.menu-hamburger span.hamburger:before,

  header nav input:checked ~label[for="menu-toggle"] div.menu-hamburger span.hamburger:after {
      transform: rotate(90deg);
      transition: 0.5s ease-in-out;

  }

  header nav input:checked ~label[for="menu-toggle"] div.menu-hamburger span.hamburger:before {
      top: 0px;

  }

  header nav input:checked ~label[for="menu-toggle"] div.menu-hamburger span.hamburger:after {
      bottom: 0px;
  }

  keyframes fade-in {

      from {

          opacity: 0;

      }

      to {

          opacity: 1;

      }
  }
}

`