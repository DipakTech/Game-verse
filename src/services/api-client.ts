import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '4ce93afa67e0447384eab7cc86251fb5',
  },
})
