import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '8c54d28c5cea44589f8295385303f5ae',
  },
})
