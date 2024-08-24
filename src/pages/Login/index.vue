<script setup lang="ts">
import router from '@/router';
import { IconLogin } from '@tabler/icons-vue';
import { useAuthStore } from '@/stores/auth';
import type { UserLogin } from '@/types/user.types';
import type { FormInst } from 'naive-ui';

const route = useRoute();
const authStore = useAuthStore();
const message = useMessage();

const loginFormRef = ref<FormInst | null>(null);
const formLogin = reactive<UserLogin>({
  account: '',
  password: ''
});
const loading = ref<boolean>(false);

const rules = {
  account: {
    required: true,
    message: 'Tài khoản không được trống',
    trigger: ['input', 'blur']
  },
  password: {
    required: true,
    message: 'Mật khẩu không được trống',
    trigger: ['input', 'blur']
  }
};

const handleLogin = (e: MouseEvent | KeyboardEvent) => {
  loginFormRef.value?.validate((errors) => {
    if (!errors) {
      loading.value = true;
      authStore
        .login(formLogin)
        .then(() => {
          const redirect = route.query.redirect;
          if (redirect) {
            return router.push(`/admin${redirect}`);
          }
          router.push(`/admin`);
        })
        .catch((err) => {
          const messageError = err?.response?.data ? err?.response?.data.message : err.message;
          message.error(messageError);
        })
        .finally(() => {
          loading.value = false;
        });
    }
  });
};
</script>

<template>
  <birthday-layout>
    <template #left>
      <div class="login-left">
        <img src="@/assets/signup/logo.png" alt="" srcset="" />
        <h1>Trang đăng nhập</h1>
        <p></p>
      </div>
    </template>
    <template #right>
      <div class="login-right">
        <h1>Xin chào Admin!</h1>
        <p>Một ngày tốt lành.</p>

        <n-form ref="loginFormRef" :rules="rules" :model="formLogin">
        <n-form-item label="Tài khoản" path="account" class="form-element">
          <n-input
            type="text"
            size="large"
            placeholder="Nhập tài khoản"
            v-model:value="formLogin.account"
          />
        </n-form-item>

        <n-form-item label="Mật khẩu" path="password" class="form-element">
          <n-input
            type="password"
            size="large"
            placeholder="Nhập mật khẩu"
            v-model:value="formLogin.password"
            @keydown.enter="handleLogin"
          />
        </n-form-item>

        <n-button class="btn btn-login" style="cursor: wait" v-if="loading">
          <n-spin size="medium" />
        </n-button>
        <n-button class="btn btn-login" @click="handleLogin" v-else>
          <IconLogin /> Đăng nhập
        </n-button>
      </n-form>
      </div>

      
    </template>
  </birthday-layout>
</template>

<style src="./Login.scss"></style>

<route lang="yaml">
name: Login
meta:
  layout: blank
</route>
