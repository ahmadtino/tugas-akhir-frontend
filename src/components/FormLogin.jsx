import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {LoginUser,reset} from "../features/authSlice";

const FormLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user, isError, isSuccess, isLoading, message} = useSelector((state) => state.auth);

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/");
      console.log(user);
    }
    dispatch(reset());
  },[user, isSuccess, dispatch, navigate])


  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({username, password}));
  }

  return (
    <div>
        <h4 className='font-weight-bold'>LOGIN FORM</h4>
        <hr />
        {isError && (<p className='text-danger'>{message}</p>)}
        <br />
        <form onSubmit={Auth}>
            <div className="form-group">
                <label for="exampleInputEmail1" className="font-weight-bold">Username</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1" className="font-weight-bold">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary" style={{width: "100%"}}>
              {isLoading ? 'Loading...' : 'Login'}
            </button>
        </form>
    </div>
  )
}

export default FormLogin
