import React from 'react'
import styles from "./Phome.module.css"


//hooks
import {useNavigate, Link} from "react-router-dom";
import{useState} from "react";
import PostDetail from '../../components/PostDetail';

//components



const Phome = () => {
  const [query, setQuery] = useState("");
  const [posts] = useState([])
  const {documents: post, loading} = useFetchDocuments("posts"); //hook documents


  const handlesubmit = (e) => {
    e.preventDefault();

  }

  

  return (
    <div className={styles.home}>
        <h1>Home</h1>
        <form onSubmit={handlesubmit}>
          <input type="text" placeholder="busque por tags" />
          <button className='btn btn-dark'>Pesquisar</button>
        </form>
        <div>
          <h2>Todas as publicações</h2>
      
          {posts && posts.map((post)=><PostDetail key={post.id} post={post}/>)}
            <h3>{post.title}</h3>

          )){'}'}
        </div>
    </div>
  );
}

export default Phome;