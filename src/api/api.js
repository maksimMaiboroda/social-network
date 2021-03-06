import * as axios from "axios";

const instanse = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "bd11c818-3e91-457e-8ff1-2f2f73147022"
  }
});

export const userAPI = {
  getUsers(pageSize, currentPage) {
    return instanse
      .get(`users?count=${pageSize}&page=${currentPage}`)
      .then(response => response.data);
  },

  unfollow(userId) {
    return instanse
      .delete(`follow/${userId}`, {
        withCredentials: true,
        headers: {
          "API-KEY": "c324c367-3ab5-463a-8a55-8dd9cfcaef74"
        }
      })
      .then(response => response.data);
  },

  follow(userId) {
    return instanse
      .post(
        `follow/${userId}`,
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

export const profileAPI = {
  getProfile(userId) {
    return instanse.get(`profile/${userId}`).then(response => response.data);
  },

  getStatus(userId) {
    return instanse.get("profile/status/" + userId);
  },

  updateStatus(status) {
    return instanse.put("profile/status", { status: status });
  }
};

export const authAPI = {
  me() {
    return instanse.get(`auth/me`).then(response => response.data);
  },

  login({ email, password, rememberMe }) {
    return instanse.post("auth/login", { email, password, rememberMe });
  },

  logout() {
    return instanse.delete("auth/login", { data: {} });
  }
};
