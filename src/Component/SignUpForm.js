import React from 'react'
function SignUpForm(){
    return(
    <div>
        <div className='First Name'>
            <label>First Name:</label>   
            <input type='First Name' placeholder= 'Gould'/>
        </div>

        <div className='Last Name'>
            <label>Last Name:</label>
            <input type='Last Name' placeholder= 'Benney'/>
        </div>

        <div classname='Email'>
            <label>Email:</label>
            <input type='Email' placeholder= 'gould@gmail.com'/>
        </div>

        <div classname='Password'>
            <label>Password:</label>
            <input type='Password' placeholder= '*************'/>
        </div>

        <div classname='Confirm Password'>
            <label>Confirm Password:</label>
            <input type='Confirm Password' placeholder= '**************'/>
        </div>
       
    <button>SignUp</button>
        </div>
    )

}

export default SignUpForm
