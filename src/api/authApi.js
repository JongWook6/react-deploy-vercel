import axios from "axios";

const API_BASE_URL = 'http://localhost:8080';

// withCredentials: false
// 서버에 요청을 보낼 때 쿠키(인증정보)를 포함하지 않음, 서버가 응답한 쿠키를 저장하지도 않음
const authApi = {
  loginApi: async (username, password) => {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, {
        username: username,
        password: password
      }, {withCredentials: true})

      return response.data;
  },

  logoutApi: async () => {
      return axios.post(`${API_BASE_URL}/auth/logout`, {
      }, {withCredentials: true})
      console.error(e)
  }
}

export default authApi