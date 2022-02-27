import Nav from "../components/Nav";
import { useState } from "react";
import ProgramContent from '../components/ProgramContent';

const Programming = ()=>{
    const [post1, setPost1] = useState([]);
    const [post2, setPost2] = useState([]);
    return(
        <div>
            <div><Nav/></div>
            <div><ProgramContent
              post1={post1}
              setPost1={setPost1}
              post2={post2}
              setPost2={setPost2}
            /></div>
        </div>
    )
}

export default Programming;