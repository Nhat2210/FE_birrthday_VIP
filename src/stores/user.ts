import { defineStore } from 'pinia';
import type { UploadFileInfo } from 'naive-ui'; 
interface UserState {
  fullName: string;
  email: string;
  generation: string;
  phoneNumber: string;
  facebook: string;
  image: string;
  id: string; 
  fileList: UploadFileInfo[];
  
}

export const useUserStore = defineStore('userStore', {
  state: (): UserState => ({
    fullName: '',
    email: '',
    generation: '',
    phoneNumber: '',
    facebook: '',
    image: '',
    id: '',
    fileList: []
  }),
  actions: {
    setUser(user: any) {
      this.fullName = user.fullName;
      this.email = user.email;
      this.generation = user.generation;
      this.phoneNumber = user.phoneNumber;
      this.facebook = user.facebook;
      this.image = user.image;
      this.fileList = user.fileList || this.fileList; 
    },
    setImage(imageUrl: string) {
      this.image = imageUrl;
    },
    setFileList(fileList: UploadFileInfo[]) {
      this.fileList = fileList;  
    }
  }
});
