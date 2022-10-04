import { instance } from './api'
import { ResponseType, MeType, AuthLogin, LoginType } from '../types'



export const authAPI = {
    me() {
      return instance.get<ResponseType<MeType>>("auth/me").then((response) => response.data);
    },
  
    login({ email, password, rememberMe, captcha = null }: LoginType) {
      return instance.post<ResponseType<AuthLogin>>("auth/login", {
        email,
        password,
        rememberMe,
        captcha
      });
    },
  
    logout() {
      return instance.delete<ResponseType>("auth/login", { data: {} });
    }
};