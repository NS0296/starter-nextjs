const axios = require('axios')

const API_ENDPOINT = 'http://nuevomundo.tk'




export default function handler(req, res) {
  axios({
    method: 'get',
    url: 'https://cs.nuevomundo.ga'
    
  }).then(res => {
      consloe.log(res)
       res.status(200).json({ name: 'John Doe' })
  }).catch(err => {
      console.log(err)
       res.status(200).json({ name: 'erro' })
  })

}
