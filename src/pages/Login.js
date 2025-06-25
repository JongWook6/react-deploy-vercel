import authApi from "../api/authApi";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import useAuthStore from "../stores/AuthStore";

export default function Login() {

  const {login} = useAuthStore();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate() // 원하는 경로로 리다이렉트

  async function loginHandler(ev) {
    ev.preventDefault();
    try {
      const response = await authApi.loginApi(username, password);
      console.dir(response);
      const decoded = jwtDecode((response.data.accessToken))
      login(decoded, response.data.accessToken)
      navigate("/");
    } catch (e) {
      alert('아이디나 비밀번호를 다시 확인해주세요.')
    }
  }

  return (
      <>
        <form className="col s12" method="post" id="signupForm" onSubmit={loginHandler}>
          <div className="row">
            <div className="input-field col s7 ">
              <i className="material-icons prefix">account_circle</i>
              <input type="text" onChange={e => setUsername(e.target.value)}
                     placeholder="userId" name="username" className="validate"/>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s7 ">
              <i className="material-icons prefix">account_circle</i>
              <input type="password" onChange={e => setPassword(e.target.value)}
                     placeholder="password" name="password" className="validate"/>
              <span className="helper-text"></span>
            </div>
          </div>
          <div className="row">
            <button className="btn waves-effect waves-light offset-s1 col-6"
                    type="submit" name="action">
              Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </>
  )
}