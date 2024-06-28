import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import {Form, Input, message} from 'antd';
import axios from "axios";
import Spinner from '../components/Layout/Spinner';
import Password from "antd/es/input/Password";
import { set } from "mongoose";
const Login =() => {
    const [Loading, setLoading] = useState(false)
    const navigate = useNavigate()
     //from submit
     const submitHandler = async(values) => {
        try{
            setLoading(true)
            const {data} = await axios.post('/users/login', values)
            setLoading(false)
            message.success('login success')
            localStorage.setItem('user', JSON.stringify({...data, Password: ''}))
            navigate('/')
        }   catch (error) {
            setLoading(false)
            message.error('something went wrong')
        }
    };
    return (
    <>
        <div className="register-page">
            {Loading && <Spinner/>  }
            <Form layout="vertical" onFinish={submitHandler}>
                <h1>Login Form</h1>
                <Form.Item label="Email" name="email">
                <Input type="email" />
                </Form.Item>
                <Form.Item label="Password" name="password">
                <Input type="Password" />
                </Form.Item>
                <div className="d-flex justify-content-between">
                    <Link to="/register">Not a user? Click Here to Register</Link>
                    <button className="btn btn-primary">Login</button>
                </div>
            </Form>
        </div>

        
    </>
    )
}

export default Login