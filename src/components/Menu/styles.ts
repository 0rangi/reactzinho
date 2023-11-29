
import styled from 'styled-components'
import { colors } from "../../styles/GlobalStyle"

export const Section = styled.section`

display: grid;
grid-template-columns: 35rem 25rem;
margin: 9rem;
gap: 4rem;
justify-content: center;

 aside {
background-color:  ${colors.secondaryLight};
  border-radius: 1rem;
  padding: 1rem;
  line-height: 3rem;
  text-align: center;
  font-size: large;
  color:  ${colors.third};
}
  
`