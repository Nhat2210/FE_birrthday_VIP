import { defineStore } from 'pinia';

interface UserState {
  fullName: string;
  email: string;
  generation: string;
  phoneNumber: string;
  facebook: string;
  image: string;
  id: string; 
}

export const useUserStore = defineStore('userStore', {
  state: (): UserState => ({
    fullName: '',
    email: '',
    generation: '',
    phoneNumber: '',
    facebook: '',
    image: '',
    id: ''
  }),
  actions: {
    setUser(user: UserState) {
      Object.assign(this, user);  
    },
    clearUser() {
      this.$reset();
    }
  }
});
