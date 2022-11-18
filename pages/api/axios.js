const axios = require('axios')

const API_ENDPOINT = 'http://nuevomundo.tk'




export default function handler(req, res) {
  axios({
    method: 'post',
    url: 'http://nuevomundo.tk',
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }
  }).then(res => {
      consloe.log(res)
       res.status(200).json({ name: 'John Doe' })
  }).catch(err => {
      console.log(err)
  })

}
