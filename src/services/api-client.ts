import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '75762b0b5f6c479fbc85a8baa071a893',
  },
})
