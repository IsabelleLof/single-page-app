import React from 'react';
import './Login.css';
import styles from './styles.jsx';


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username:"",
            password:"",
            error: "",
            description: "",
            logged: true
            
        }
    }

    handleInput = (e) => {
        let { name, value } = e.target;
        this.setState({
         [name]:value
        });
       };

       handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
       
        let error = null;

        const username_trim = this.state.username.trim();
        const password_trim = this.state.password.trim();
        const description_trim = this.state.description.trim();
        if (username_trim.length == 0) {
            error = "Enter a username";
        } else if (password_trim.length == 0) {
            error = "Enter a password";
        } else if (description_trim.length == 0) {
            error = "Enter a description";
        }   

        this.setState({
         error: error
        });
        
        if (error) {
            return;

        }
    }

       render() {      
       return (
       <div className='contactsheet'>
       <div>
           <p className='heading'>
               <h1>Signup for my News Letter every Week!</h1></p>
       </div>
       <form styles={styles.wrapper} onSubmit={this.handleSubmit}>
          <div className='inputs'>
           <div> 
            <input
             type='text'
             placeholder='Username'
             name='username'
             value={this.state.username}
             style={styles.input}
             onChange={this.handleInput} />
            </div>
            <div> 
            <input
             type='password'
             placeholder='Password'
             name='password'
             value={this.state.password}
             style={styles.input}
             onChange={this.handleInput}
             autoComplete='current-password'
             />
             </div>
          </div>
           <div>
            <textarea
             type='text'
             placeholder='Description'
             name='description'
             value={this.state.desc}
             onChange={this.handleInput} />
           </div>
           <input type='submit' value='Log In' style={styles.submit} />
           <p style={styles.error}>{this.state.error}</p>
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