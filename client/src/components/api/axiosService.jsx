// api/axiosService.js

import axios from 'axios';

const login = async (userName, password) => {
  try {
    const response = await axios.post('http://localhost:3004/IRis/login', {
      userName,
      password,
    });

    if (response.data.token) {
      return { success: true, token: response.data.token };
    } else {
      return { success: false, error: 'Credenciales incorrectas' };
    }
  } catch (error) {
    console.error('Error al intentar iniciar sesión:', error);
    return { success: false, error: 'Error al intentar iniciar sesión' };
  }
};

export default {
  login,
};
