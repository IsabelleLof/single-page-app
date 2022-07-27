import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import './Login.css';
//import FakeAPI from './fakeAPI.jsx';

function Login() {

render(); {    
    return (
    <div className='contactsheet'>
       <div>
           <p className='heading'>
               <h1>Signup for my News Letter every Week!</h1></p>
       </div>
       <form>
          <div className='inputs'> 
           <div>
            <input
             type='text'
             placeholder='Username'
             name='username'/>
           </div>
           <div>
            <input
             type='text'
             placeholder='Password'
             name='password'/>
           </div>
           </div>
           <div>
            <textarea
             type='text'
             placeholder=''
                Helloooooo
            />
           </div>
           <input type='submit' />
       </form>
    </div>
    );
 }
} 

//export default class App extends React.Component {
//    constructor(){
//        super();
//        this.state = {
//            username:'isabelle_l85',
//            password:'myverysecurePassword',
//            error: '404Error',
//            logged:'false',
//        }
//    } 
//
//      handleInput = (event) => {
//      let { name, value} = e.target;
//      this.setState({
//      [name]:value
//});
//}
//      handleSubmit = (event) => {
//      e.preventDefault();
//      e.stopPropagation();
//
//      let error = null;
//    const username_trim = this.state.username.trim();
//    const password_trim = this.state.password.trim();
//    if (username_trim.length == 0) {
//    error = "Enter a username";
//    } else if (password_trim.length == 0) {
//    error = "Enter a password";
//    }
//}    this.setState
//}

//render() {
//return(
//    <div>
//
//    </div>
//);
//return (
//<form>
// <input />
// <input />
//</form>
// );
//}
  

export default Login;