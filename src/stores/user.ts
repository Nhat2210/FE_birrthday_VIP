import { defineStore } from 'pinia';

interface UserState {
  fullName: string;
  email: string;
  generation: string;
  phoneNumber: string;
  facebook: string;
  image: string;
}

export const useUserStore = defineStore('userStore', {
  state: (): UserState => ({
    fullName: '',
    email: '',
    generation: '',
    phoneNumber: '',
    facebook: '',
    image: ''
  }),
  actions: {
    setUser(user: UserState) {
      this.fullName = user.fullName;
      this.email = user.email;
      this.generation = user.generation;
      this.phoneNumber = user.phoneNumber;
      this.facebook = user.facebook;
      this.image = user.image;
    },
    clearUser() {
      this.$reset();
    }
  }
});
