import Axios from 'axios';

Axios.defaults.baseURL = "http://localhost:8080"

const UNPROTECTED_PATHS = [
  "loginUser",
  "registerUser",
  "create-uploadPic",
  "upload-media/:media_id",
  "keywords"
]

const isUnprotectedPath = (url) => {
  for (let path of UNPROTECTED_PATHS) {
    if (url.includes(path)) {
      return true
    }
    return false
  }
}

Axios.interceptors.request.use(
  async config => {
    if (isUnprotectedPath(config.url)) {
      return config
    }

    let token = localStorage.getItem("ACCESS_TOKEN")
    config.headers["Authorization"] = `Bearer ${token}`
    return config
  },
  async error => {
    throw error;
  }
)

export default Axios;