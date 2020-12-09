import React, {useState} from 'react'


function Like() {
    const[count,setCounts] = useState(0)
    const[dislike,setDislike] = useState(0)
    const like = () => {
        setCounts(count + 1) 
    }

    const downvote = () => {
        setDislike(dislike - 1)
    }
    return (
        <div>
            <p className='vote-p'>{count}</p>
            <button className ='like-button' onclick ={like}> upvote </button>

            <p className='vote-p'>{dislike}</p>
            <button className ='like-button' onclick ={dislike}> downvote </button>
        </div>
    )
}

export default Like;
