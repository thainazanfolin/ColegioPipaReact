import React from 'react'
import styles from "./CreatePost.module.css"

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useInsertDocument } from '../../hooks/useInsertDocument'

const CreatePost = () => {
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [body, setBody] = useState("")
    const [tags, setTags] = useState([])

    const {useInsertDocument, response} = useInsertDocument("posts");

    const handleSubmit = (e) => {
       e.preventDefault(); 
       setFormErro("")

        useInsertDocument({
            title,
            body,
            tags
        })
    }

  return (
    <div>
        <h2>Criar post</h2>
        <p></p>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Titulo</span>
                <input type="text" name="title" required placeholder='Titulo do Conteúdo' onChange={(e) => setTitle(e.target.value)} value={title} />
            </label>
            <label>
                <span>Conteúdo</span>
                <textarea type="text" name="body" required placeholder='Conteúdo' onChange={(e) => setBody(e.target.value)} value={body} />
            </label>
            <label>
                <span>Tag</span>
                <input type="text" name="tags" required placeholder='Tags' onChange={(e) => setTags(e.target.value)} value={tags} />
            </label>

            <button className='btn'> Salvar Conteúdo </button>
        </form>
    </div>
  )
}

export default CreatePost