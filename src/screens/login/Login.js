import React,{useState} from 'react';
import './Login.css';
import {userLogin} from '../../actions/index';
import { connect } from 'react-redux';


function Login(props) {

    const {user,userLogin}=props;

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const values={username,password};

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log("Logging in");
            userLogin(values);
    }
    return (
        <div className="loginBox">
        <form className="loginContainer" onSubmit={handleSubmit}>
            <h1 className="loginTitle">login</h1>
            <table className="fieldContainer">
                <tbody>
                <tr>
                    <td>
                    <input type="text" name="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td>
                    <input type="password" name="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td><button type="submit" className="submitButton">Submit</button></td>
                </tr>
                </tbody>
            </table>
            
            
        </form>
        </div>
    );
}

const mapStateToProps=(state)=>({user:state.user})
const mapDispatchToProps=(dispatch)=>({
    userLogin:(values)=>dispatch(userLogin(values))
})
export default connect(mapStateToProps,mapDispatchToProps)(Login);