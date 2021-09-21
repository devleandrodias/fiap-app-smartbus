import axios from 'axios';

export const apiSpTrans = axios.create({
  baseURL: 'http://api.olhovivo.sptrans.com.br/v2.1/',
});
