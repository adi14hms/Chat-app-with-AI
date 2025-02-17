import React,{useState,useContext} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import axios from '../config/axios';
import { userContext } from '../context/user.context';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

   const {user,setUser} = useContext(userContext)

    const navigate = useNavigate()

    function submitHandler(e) {
        e.preventDefault();

        axios.post('/users/login', {
            email,
            password
        }).then((res) => {
            console.log(res.data);
            localStorage.setItem('token', res.data.token);
            setUser(res.data.user)

            
            navigate('/')
        }).catch((err) => {
            console.log(err.response.data);
        })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Login</h2>
                <form 
                onSubmit={submitHandler}
                className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                        <input
                            onChange = {(e) => setEmail(e.target.value)}
                            type="email"
                            id="email"
                            className="mt-1 block w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            id="password"
                            className="mt-1 block w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-6 text-center text-gray-400">
                    Don't have an account? <Link to="/register" className="text-indigo-500 hover:underline">Create one</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;