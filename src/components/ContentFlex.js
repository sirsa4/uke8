import { MainContentStyle } from "../styles/MainContentStyle";

import {useEffect} from 'react';


const ContentFlex = ({post1, setPost1, post2, setPost2}) => {
  

  const getpost1 = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/photos/1');
    const data = await response.json();
    const newPost = [...post1, {albumId : data.albumId, id: data.id, title: data.title, url: data.url}];
    setPost1(newPost);
    console.log(newPost);
    
  }

  const getPost2 = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    const newPost = [...post2,{id: data.id, title: data.title, body: data.body}];
    setPost2(newPost);
  }
 useEffect(()=>{
  getpost1()
  getPost2()
 },[]);
  
  return (
    <MainContentStyle>
      <section>
        {/* <article>
          <h2>Design is Human.</h2>
          <img
            src="https://images.unsplash.com/photo-1645434005957-0b5a8313c8ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            alt="random"
          />
        </article> */}
         {post1?.map((item)=>{
            const {albumId, id, title, url} = item;
            return <article key={id}><h2>{title}</h2><img src="https://images.unsplash.com/photo-1645434005957-0b5a8313c8ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt='hi' /></article>
          })}
        
        {post2?.map((post)=>{
          const {id,title, body} = post;
          return <article key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
          </article>
        })}
      </section>
    </MainContentStyle>
  );
};

export default ContentFlex;
