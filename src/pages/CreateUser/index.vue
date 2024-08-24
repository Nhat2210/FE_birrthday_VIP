<script setup lang="ts">
import type { SelectOption, FormInst, FormItemRule } from 'naive-ui';
import type { IUserUpdate, APIUserResponse } from '@/types/user.types';

const formValue = reactive<IUserUpdate>({
  fullName: '',
  email: '',
  facebook: '',
  phone: '',
  course: null,
  isFaceCheckin: false,
  fileList: []
});

const createFormRef = ref<FormInst | null>(null);
const message = useMessage();
const loading = ref<boolean>(false);

const options: SelectOption[] = Array.from(Array(17).keys()).reduce(
  (a, b) => {
    if (b != 0) {
      a.push({
        label: `Khóa ${b <= 9 ? '0' + b : b}`,
        value: `${b <= 9 ? '0' + b : b}`
      });
    }
    return a;
  },
  <SelectOption[]>[]
);

const rules = {
  fullName: {
    required: true,
    validator(rule: FormItemRule, value: string) {
      if (!value) {
        return new Error('Vui lòng nhập họ và tên');
      } else if (value.length < 3) {
        return new Error('Họ và tên không được quá ngắn');
      } else if (value.length > 30) {
        return new Error('Họ và tên không được vượt quá 30 ký tự');
      } else if (!/^[\p{L}\s]*$/u.test(value)) {
        return new Error('Họ và tên không được chứa số, ký tự đặc biệt');
      }
      return true;
    },
    trigger: ['input', 'blur']
  },
  course: {
    required: true,
    message: 'Vui lòng chọn khóa',
    trigger: ['input', 'blur']
  },
  email: {
    required: true,
    validator(rule: FormItemRule, value: string) {
      if (!value) {
        return new Error('Vui lòng nhập email');
      } else if (!/^[a-zA-Z0-9](\.?[a-zA-Z0-9]){5,}@g(oogle)?mail\.com$/.test(value)) {
        return new Error('Định dạng email không hợp lệ (chỉ chấp nhận gmail)');
      }
      return true;
    },
    trigger: ['input', 'blur']
  },
  phone: {
    required: true,
    validator(rule: FormItemRule, value: string) {
      if (!value) {
        return new Error('Vui lòng nhập số điện thoại');
      } else if (!/^(0)(3[2-9]|5[2|6|8|9]|7[0|6-9]|8[0-9]|9[0-4|6-9])[0-9]{7}$/.test(value)) {
        return new Error('Định dạng số điện thoại không hợp lệ');
      }
      return true;
    },
    trigger: ['input', 'blur']
  },
  facebook: {
    required: true,
    validator(rule: FormItemRule, value: string) {
      if (!value) {
        return new Error('Vui lòng nhập link tài khoản facebook');
      } else if (!/^(?:https?:\/\/)?(?:www\.|m\.)?facebook\.com\/.*$/.test(value)) {
        return new Error('Định dạng không hợp lệ');
      }
      return true;
    },
    trigger: ['input', 'blur']
  },
  fileList: {
    required: true,
    validator(rule: FormItemRule, value: string) {
      if (value.length == 0 && formValue.isFaceCheckin) {
        return new Error('Checkin khuôn mặt, ảnh là bắt buộc');
      }
      return true;
    },
    trigger: ['blur']
  }
};
createFormRef;
// const handleCreate = () => {
//   createFormRef.value?.validate((errors) => {
//     if (!errors) {
//       loading.value = true;
//       createUser(toRaw(formValue))
//         .then(({ data }) => {
//           message.success('Tạo thành công');
//         })
//         .catch((error) => {
//           const msgError = error?.response?.data?.message
//             ? error?.response?.data?.message
//             : error.message;

//           message.error(msgError);
//         })
//         .finally(() => {
//           loading.value = false;
//         });
//     }
//   });
// };

const handleRandomInfo = () => {
  formValue.email = randomEmail();
  formValue.phone = randomPhone();
  formValue.facebook = randomFacebook();
};

const handleReload = () => {
  formValue.fullName = '';
  formValue.course = null;
  formValue.email = '';
  formValue.phone = '';
  formValue.facebook = '';
}

const randomEmail = (): string => {
  let str = (Math.random() + 1).toString(36).substring(2);
  return `${str}@gmail.com`;
};

const randomPhone = (): string => {
  let str = '';

  for (let i = 0; i < 8; i++) {
    const randomDigit = Math.floor(Math.random() * 10);
    str += randomDigit;
  }

  return `09${str}`;
};

const randomFacebook = (): string => {
  let str = (Math.random() + 1).toString(36).substring(2);
  return `https://www.facebook.com/${str}`;
};
</script>

<template>
  <div class="update-user">
    <div class="update-wrapper">
      <h1>Tạo mới</h1>
      <n-form ref="createFormRef" :rules="rules" :model="formValue">
        <n-form-item label="Họ và tên" path="fullName" class="form-element">
          <n-input
            type="text"
            size="large"
            placeholder="Họ và tên"
            v-model:value="formValue.fullName"
          />
        </n-form-item>

        <n-form-item label="Khóa" path="course" class="form-element">
          <n-select
            size="large"
            :options="options"
            placeholder="Chọn khóa"
            v-model:value="formValue.course"
          />
        </n-form-item>

        <n-form-item label="Email" path="email" class="form-element">
          <n-input
            type="text"
            size="large"
            placeholder="anhnhat22102003@gmail.com"
            v-model:value="formValue.email"
          />
        </n-form-item>

        <n-form-item label="Số điện thoại" path="phone" class="form-element">
          <n-input
            type="text"
            size="large"
            placeholder="0999999999"
            v-model:value="formValue.phone"
          />
        </n-form-item>

        <n-form-item label="Link facebook" path="facebook" class="form-element">
          <n-input
            type="text"
            size="large"
            placeholder="https://www.facebook.com/nhatbeocute03."
            v-model:value="formValue.facebook"
          />
        </n-form-item>

        <n-space>
          <!-- <n-button
            class="btn-update"
            size="large"
            :loading="loading"
            @click="handleCreate"
            type="primary"
          >
            <template #icon>
              <IconPlus />
            </template>
            Tạo mới
          </n-button> -->
          <n-button
            class="btn-delete"
            type="error"
            size="large"
            :loading="loading"
            @click="handleRandomInfo"
          >
            <template #icon>
              <IconBrandInertia />
            </template>
            Random thông tin
          </n-button>

          <n-button
            class="btn-delete"
            type="info"
            size="large"
            :loading="loading"
            @click="handleReload"
          >
            <template #icon>
              <IconRefresh />
            </template>
            Làm mới
          </n-button>
        </n-space>
      </n-form>
    </div>
  </div>
</template>

<style lang="scss" src="./CreateUser.scss"></style>

<route lang="yaml">
name: CreateUser
meta:
  layout: blank
</route>
