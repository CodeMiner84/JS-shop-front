import axios from 'axios';
import { API_URL } from '../config';
import routes from 'src/Common/routes';
import { authHeaders } from 'src/Common/api';
import { UserState } from 'src/Auth/Signup';

export const me = (token?: string) =>
  axios({
    method: 'post',
    url: `${API_URL}${routes.me}`,
    headers: authHeaders(token),
  });

export const callRegisterUser = (user: UserState) =>
  axios({
    method: 'post',
    url: `${API_URL}${routes.register}`,
    data: user,
  });

export const callLoginUser = (url: string, user: UserState) =>
  axios({
    method: 'post',
    url: `${API_URL}${url}`,
    data: user,
  });