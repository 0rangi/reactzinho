import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.header`
  /* Cabeçalho */
  border-bottom: 0.4rem solid ${colors.third};
  display: flex;
  height: 6rem;
  picture {
    margin-left: 0.5rem;
    padding: 0.5rem;
    img {
      height: 100%;
    }
  }

  header picture img {
  display: flex;
  flex-direction: row;

  background-color: ${colors.primary};

}

`

export const NavBar = styled.nav`
  /* Navegação */
 a.entrar {
  font-weight: bold;
  font-size: 1.5rem;
  left: 0.6rem;
}

a.novidades {

  text-decoration: underline ${colors.secondary};
}

header nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: right;
}

header nav ul {
  list-style-type: none;
  display: flex;
  align-items: center;
  height: 100%;
}

header nav ul li {
  padding: 1rem;
  height: 100%;
  display: flex;
  align-items: center;
}

header nav ul li a {
  text-decoration: none;
  color: var(--black);
}

header nav ul li:hover {
  text-decoration: underline ${colors.primary};
  background-color: ${colors.secondary};

}

header a.inicial {
  padding: 1.5rem 0rem 2rem 1rem;

}

main {
  min-height: calc(100vh- 7rem);
}

main section {
  display: flex;
  max-width: 1115px;
  margin: 9rem auto;

}

main section.img img {
  width: 50%;
  padding-right: 1rem;
  padding-left: 1rem;
}
`