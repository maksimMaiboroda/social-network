import { instance } from './api'
import { GetCaptchaUrlResponseType } from '../types'

export const securityAPI = {
    getCaptchaUrl() {
      return instance.get<GetCaptchaUrlResponseType>("security/get-captcha-url").then(res => res.data);
    }
};