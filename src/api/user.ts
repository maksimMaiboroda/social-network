import { instance } from './api'
import {ResponseType, UsersResponseType} from '../types'

export const userAPI = {
    getUsers(pageSize: number, currentPage: number) {
      return instance
        .get<UsersResponseType>(`users?count=${pageSize}&page=${currentPage}`)
        .then(response => response.data);
    },
  
    unfollow(userId: number) {
      return instance
        .delete<ResponseType>(`follow/${userId}`, {
          withCredentials: true,
          headers: {
            "API-KEY": "bd11c818-3e91-457e-8ff1-2f2f73147022"
          }
        })
        .then(response => response.data);
    },
  
    follow(userId: number) {
      return instance
        .post<ResponseType>(
          `follow/${userId}`,
          {},
          {
            withCredentials: true,
            headers: {
              "API-KEY": "bd11c818-3e91-457e-8ff1-2f2f73147022"
            }
          }
        )
        .then(response => response.data);
    }
  };