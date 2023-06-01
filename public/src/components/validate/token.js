import axios from 'axios';
import {
    LOGIN,
  } from "../../redux/action-types";
//const BASE_ENDPOINT = 'http://localhost:3001'
const BASE_ENDPOINT = 'https://pokeapp-production-d07a.up.railway.app'


const validateToken = (token) => {

    return async (dispatch) => {

  try {
      const response = await axios.post(`${BASE_ENDPOINT}/validate-token`, null, {
      headers: {
        authorization: token,
      },
    });

    const { validate } = response.data;
    console.log(response);
    if (validate) {
        dispatch({
            type: LOGIN,
            payload: {access: true},
          })
    } else {
      console.log('El token no es válido');
    }
  } catch (error) {
    console.error('Error al validar el token:', error);
  }
};
}


export default validateToken