import styled from 'styled-components';

export const HeaderStyle = styled.header`
background-color: white;
box-shadow: 1px 0 1px black;
text-decoration: none;



@media (min-width: ${({theme})=>theme.desktop}){
   
}

`;

export const NavOppgave1 = styled.nav`
    min-height: 10vh;
   
    a {
        text-decoration: none;

        &:hover {
            color: green;
        }
    }

    ul{
        display: flex;
        flex-direction: column;
        list-style: none;
        text-decoration: none;
        
      
      
    }

   a:nth-child(2)::before{
       content: '01';
       padding-top: 20px;
   }
   a:nth-child(3)::before{
       content: '02';
       padding-top: 20px;
   }
   a:nth-child(4)::before{
       content: '03';
       padding-top: 20px;
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

