import React, { useEffect, useState }from 'react'
import axios from 'axios'
import '../Styles/post.css'
import Like from '../Component/Like'

const Post = () => {

        const[blogs,setBlogs]= useState([])

        useEffect(()=>{
                axios
                        .get('https://jsonplaceholder.typicode.com/posts')
                        .then(function(response){
                                console.log(response)
                                setBlogs(response.data)
                        })
                        .catch(function(error){console.log(error)})
                        .finally(function(){})
                
        },[]) 
        const fullpage =(e)=>{
                e.preventDefault()
                alert('viewing full page')
        }      
        return(
                <div className= 'white'>
                        <div>
                                <h1>Agents of Change Today</h1>
                                {blogs.map((blog)=>(
                                        <div key={blog.id} className='blog'onClick={fullpage}>
                                                <h2>{blog.title}</h2>
                                                <p>{blog.body}</p>
                                                <div className='Like'><Like/></div>
                                        </div>
                                ))}
                                
                        </div>
                </div>
        )
        }
export default Post;