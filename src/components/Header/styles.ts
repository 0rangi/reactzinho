import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.header`
  


  background: ${colors.primary};
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
        text-decoration: none;
  color: ${colors.black};
;
      }
    }
    
    li:hover {
      text-decoration: underline ${colors.primary};
  background-color: ${colors.secondary};
    }

    .entrar {
  font-weight: bold;
  font-size: 2rem;
  left: 0.6rem;
}

.novidades {

text-decoration: underline ${colors.secondary};
}

  }

`