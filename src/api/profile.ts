import { instance } from './api'
import { ResponseType, Profile } from '../types'

export const profileAPI = {
    getProfile(userId: number) {
      return instance.get<Profile>(`profile/${userId}`).then(response => response.data);
    },
  
    getStatus(userId: number) {
      return instance.get("profile/status/" + userId);
    },
  
    updateStatus(status: string) {
      return instance.put("profile/status", { status: status });
    },
  
    savePhoto(photoFile: any) {
      const formData = new FormData();
      formData.append("image", photoFile);
  
      return instance.put("profile/photo", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
    },
  
    saveProfile(profile: Profile) {
      return instance.put<ResponseType>("profile", profile);
    }
  };