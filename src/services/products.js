import axios from 'axios'

export const getProducts = async () => {
  try {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL}/products`)
    return response.data
  } catch (error) {
    if (error.response) {
      return error.response
    } else return 'Error'
  }
}

export const getOneProduct = async (id) => {
  try {
    const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL}/products/${id}`)
    return response.data
  } catch (error) {
    if (error.response) {
      return error.response
    } else return 'Error'
  }
}
