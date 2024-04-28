import {useState} from 'react';
import {Link} from 'react-router-dom';
import styles from './styles.module.css';

const Signup = () => {
    const [data, setData] = useState({
    firstName:"",
    lastName:"",
    email: "",
    password: "",
 })    
 return (
        <div className = {styles.signup_container}>
            <div className = {styles.signup_form_container}>
                <div className = {styles.left}>
                <h1> Welcome Back</h1>
                <Link to ="/login">
                    <button type='Button' className = {styles.white_btn}>
                        Sign in
                    </button>
                </Link>
                </div>
                <div className = {styles.right}>
                    <form className= {styles.form_container}>
                        <h1> Create Account</h1>
                        <input 
                        type="text"
                        placeholder='First Name' 
                        name='firstName' 
                        onChange = { handleChange }
                        value = {data.firstName}
                        required
                        className = {styles.input}
                        />
            
                    </form>
                </div>

            </div>
        </div>
    )
};