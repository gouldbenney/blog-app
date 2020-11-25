import React from 'react'
function LoginForm(){
    return(
<div>
    <div className='email'>
        <label>Email:</label>   
        <input type='email' placeholder= 'gould@gmail.com'/>
    </div>

    <div className='password'>
        <label>Password:</label>
        <input type='password' placeholder= '.........'/>
    </div>
    
        <button>Login</button>
</div>
    )


}

export default LoginForm
