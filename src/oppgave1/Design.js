import ContentFlex from "../components/ContentFlex";
import Nav from "../components/Nav";
import {useState} from 'react';

const Design =()=>{
    const [post1, setPost1] = useState([]);
    const [post2, setPost2] = useState([]);


    return(
        <div>
            <Nav />
            <div>
                Design Page
                <ContentFlex 
                post1={post1}
                setPost1={setPost1}
                post2={post2}
                setPost2={setPost2}
                />
            </div>
        </div>
    )
}

export default Design;