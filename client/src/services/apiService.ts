import axios from 'axios'

/*
 * Api Service
 * */

const apiUrls = {
  USER_URL: '/api/v1/user',
  USER_REGISTER_URL: '/api/v1/user/register',
  USER_LOGIN_URL: '/api/v1/user/login',
  USER_ME_URL: '/api/v1/user/me',
  SHOP_SECTIONS_URL: '/api/v1/section'
}

const STRIPE_PAYMENT_URL = '/payment'

// Axios Instance
const axiosInstance = axios.create({
  timeout: 3000
})

// Runs before every request
axiosInstance.interceptors.request.use(
  function(config) {
    const token = localStorage.getItem('mern-dev') || ''

    if (token && token !== '') {
      config.headers['x-auth-token'] = token
    }
    return config
  },
  function(err) {
    return Promise.reject(err)
  }
)

class ApiService {
  static registerUser(userData: any) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    return axios.post(apiUrls.USER_REGISTER_URL, userData, config)
  }

  static loginUser(userData: any) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    return axios.post(apiUrls.USER_LOGIN_URL, userData, config)
  }

  static loadUser() {
    return axiosInstance.get(apiUrls.USER_ME_URL)
  }

  static getSections() {
    return axios.get(apiUrls.SHOP_SECTIONS_URL)
  }

  static stripePayment(paymentData: any) {
    return axios.post(STRIPE_PAYMENT_URL, paymentData)
  }
}

export default new ApiService()
