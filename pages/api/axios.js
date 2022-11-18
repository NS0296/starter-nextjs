const axios = require('axios')

const API_ENDPOINT = 'http://nuevomundo.tk'




export default function handler(req, res) {
  exports.handler2 = async (req, res) => {
  let response
  try {
    response = await axios.get(API_ENDPOINT)
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message
      })
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: response.data
    })
  }
}
   res.status(200).json(handler2(req,res))

}
