import React from 'react'
const Login = React.lazy(()=> import('./LoginPage'))
const SignUp = React.lazy(()=> import('./SignUpPage'))

const Pages = {
    Login,
    SignUp
}
 
export default Pages 