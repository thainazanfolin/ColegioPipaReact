import styles from './PostDetail.module.css'
import { Link } from 'react-router-dom'


import React from 'react'

const PostDetail = ({post}) => {
  return (
    <div className={styles.post_detail}>
        <img src={post.image} alt={post.title} />
        <h2>{post.title}</h2>
        <p></p>
        <div className={styles.tags}>
            {post.tags.map((tag) =>{
                <p key={tag}><span>#</span>{tag}</p>

            })}
        </div>
        <Link to={`/posts/${post.id}`} className="btn btn-pitline">Ler mais</Link>
    </div>
  )
}

export default PostDetail