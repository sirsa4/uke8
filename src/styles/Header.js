import styled from 'styled-components';

export const HeaderStyle = styled.header`
background-color: white;
box-shadow: 1px 0 1px black;



@media (min-width: ${({theme})=>theme.desktop}){
   
}

`;

export const NavOppgave1 = styled.nav`
    min-height: 10vh;
   

    ul{
        display: flex;
        flex-direction: column;
        list-style: none;
      
        
        
        
    }

    @media (min-width: ${({theme})=>theme.desktop}){
        ul {
            flex-direction: row;
            flex-grow: 1;
            
            li {
                padding: 2rem 0;
                width: 20vw;
                height: 50px;
                
                
                &:active{
                    background-color: orange;
                    
                }
            }
        }

    }
`;

