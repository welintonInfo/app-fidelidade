import { create } from 'axios';
import { AsyncStorage } from 'react-native'

const api = create({
  baseURL: 'http://192.168.88.9:3000',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Headers': '*',
  }
});
api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

AsyncStorage.getItem('@api-user:token').then(
  (token) => {
      if (token) {
          //incluimos o cabeçalho authorization no default do axios
          api.defaults.headers.common['authorization'] = `Bearer ${token}`;
      }
  }
);

export default api;
