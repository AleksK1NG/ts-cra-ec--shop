import axios from 'axios'

/*
 * Api Service
 * */

const apiUrls = {
  USER_URL: '/api/v1/user',
  USER_REGISTER_URL: '/api/v1/user/register',
  USER_LOGIN_URL: '/api/v1/user/login',
  USER_ME_URL: '/api/v1/user/me',
  SHOP_SECTIONS_URL: '/api/v1/section',
  CATEGORY_URL: '/api/v1/category',
  ITEM_URL: '/api/v1/item'
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
  public registerUser(userData: any) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    return axios.post(apiUrls.USER_REGISTER_URL, userData, config)
  }

  public loginUser(userData: any) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    return axios.post(apiUrls.USER_LOGIN_URL, userData, config)
  }

  public loadUser() {
    return axiosInstance.get(apiUrls.USER_ME_URL)
  }

  public getSections() {
    return axios.get(apiUrls.SHOP_SECTIONS_URL)
  }

  public stripePayment(paymentData: any) {
    return axios.post(STRIPE_PAYMENT_URL, paymentData)
  }

  public getAllCategories() {
    return axios.get(apiUrls.CATEGORY_URL)
  }

  public getAllItems() {
    return axios.get(apiUrls.ITEM_URL)
  }

  public getCategoryItems(categoryId: string) {
    return axios.get(`${apiUrls.ITEM_URL}/category/${categoryId}`)
  }

}

export default new ApiService()
