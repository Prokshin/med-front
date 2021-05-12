import React, {useState} from "react";
import {httpService} from '../data/DataProviderBase';
import {useDispatch} from "react-redux";
import {actions} from "../core/coreSlice";

const LoginPage = () => {
    const dispatch = useDispatch()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(email, password)
        // httpService.post('/login',JSON.stringify({email, password})).then((e)=>console.log(e))
        dispatch(actions.loginRequest({email, password}));
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" onChange={onChangeEmail} className="form-control" id="exampleInputEmail1"
                       aria-describedby="emailHelp" value={email}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" onChange={onChangePassword} className="form-control" id="exampleInputPassword1"
                       value={password}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default React.memo(LoginPage);
