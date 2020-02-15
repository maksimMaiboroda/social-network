import * as axios from "axios";

const instanse = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "c324c367-3ab5-463a-8a55-8dd9cfcaef74"
  }
});

export const userAPI = {
  getUsers(pageSize, currentPage) {
    return instanse
      .get(`users?count=${pageSize}&page=${currentPage}`)
      .then(response => response.data);
  }
};

export const authAPI = {};

export const followAPI = {
  unfollow(userId) {
    return axios
      .delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
        withCredentials: true,
        headers: {
          "API-KEY": "c324c367-3ab5-463a-8a55-8dd9cfcaef74"
        }
      })
      .then(response => response.data);
  },

  follow(userId) {
    return axios
      .post(
        `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
        {},
        {
          withCredentials: true,
          headers: {
            "API-KEY": "c324c367-3ab5-463a-8a55-8dd9cfcaef74"
          }
        }
      )
      .then(response => response.data);
  }
};
