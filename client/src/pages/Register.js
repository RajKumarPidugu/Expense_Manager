import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import {Form, Input, message} from 'antd';
import axios from 'axios'
import { set } from "mongoose";
const Register = () => {
const navigate = useNavigate()
const [Loading, setLoading] = useState(false)

    //from submit
    const submitHandler = async (values) => {
        try{
            setLoading(true)
          await axios.post('/users/register', values) // Here, I used Async function
          message.success('Registration Successful')
          setLoading(false)
          navigate('/login')
        } catch(error){
          setLoading(false)  
          message.error("invalid username or password");
        }
    };
    return (
        <>
        <div className="register-page">
            {Loading && <Spinner />}
            <Form layout="vertical" onFinish={submitHandler}>
                <h1>Register</h1>
                <Form.Item label="Name" name="name">
                <Input />
                </Form.Item>
                <Form.Item label="Email" name="email">
                <Input type="email" />
                </Form.Item>
                <Form.Item label="Password" name="password">
                <Input type="password" />
                </Form.Item>
                <div className="d-flex justify-content-between">
                    <Link to="/login">Already Register ? Click Here to Login</Link>
                    <button className="btn btn-primary">Register</button>
                </div>
            </Form>
        </div>

        </>
    );
};

export default Register;