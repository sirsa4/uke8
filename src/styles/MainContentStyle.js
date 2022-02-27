import styled from 'styled-components';

export const MainContentStyle = styled.main`


article {
    /* border: 1px solid black; */
    box-shadow: 2px ;
}

h2 {
    font-size: 1rem;
}

/* img {
    width: 20%;
} */
section{
    display: grid;
   
    gap: 1rem;

    article:nth-child(1) {
        display: flex;
        flex-wrap: wrap;
        height: 50vh;
        
        img {
            width: 100%;
            height: 88%;
            
        }
    }
    article:nth-child(2) {
        display: flex column;  
    }
}
    @media (min-width: ${({theme})=>theme.desktop}){
        section {
            grid-template-columns: repeat(2,1fr);
            article:nth-child(1) {
        flex-wrap: nowrap;
            
        
        h2 {
            
            align-self: center;
        }
        img{
            height: 100%;
        }
    }
            
        }
       

    }


`;