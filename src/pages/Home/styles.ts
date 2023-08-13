import styled from 'styled-components'

export const Section = styled.section`

 min-height: calc(100vh- 9rem);


  max-width: 1115px;

  display: flex;
 
margin: 6rem ;


  width: 50%;

  justify-content: center center center center;

  gap: 3rem;
 
  @media (max-width: 1010px){
main > section.menu{
    grid-template-columns: auto;
    padding-left: 1rem;
    padding-right: 1rem;
}
header{
background-size: 206px;
}
header a.inicial{
width: 65%;

}

}

@media (max-width:768px){

    main > section.menu {
        grid-template-columns: auto;
 
   }
main section{

font-size: 1rem;

}

}

`