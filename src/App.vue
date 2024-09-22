<!-- <template>
<n-config-provider :theme-overrides="themeOverrides" :theme="theme"> 
  <n-message-provider>
      <router-view></router-view>
    </n-message-provider>
  </n-config-provider>
</template>



<script setup lang="ts">
import { computed } from 'vue';
import { onMounted } from 'vue';
import type { GlobalThemeOverrides } from 'naive-ui';
import { darkTheme, lightTheme } from 'naive-ui';
import { useSettingStore } from '@/stores/setting';
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#c7e1ff',
    primaryColorHover: '#398ae7'
  },
  Button: {
    border: '1px solid #398ae7',
    borderPressed: '1px solid #398ae7',
    textColorPressed: '#398ae7',
    colorPrimary: '#398ae7',
    textColorPrimary: 'white',
    colorFocusPrimary: '#398ae7',
    textColorFocusPrimary: 'white',
    colorHoverPrimary: 'white',
    textColorHoverPrimary: '#398ae7',
    colorPressedPrimary: '#398ae7',
    borderPressedPrimary: '1px solid #398ae7',
    textColorPressedPrimary: 'white'
  }
}

const settingStore = useSettingStore()
const theme = computed(() => settingStore.darkMode ? darkTheme : lightTheme)
</script> -->

<template>
  <n-config-provider :theme-overrides="themeOverrides" :theme="theme">
    <n-message-provider>
      <router-view></router-view>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { GlobalThemeOverrides } from 'naive-ui';
import { darkTheme, lightTheme } from 'naive-ui';
import { useSettingStore } from '@/stores/setting';

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#c7e1ff',
    primaryColorHover: '#398ae7'
  },
  Button: {
    border: '1px solid #398ae7',
    borderPressed: '1px solid #398ae7',
    textColorPressed: '#398ae7',
    colorPrimary: '#398ae7',
    textColorPrimary: 'white',
    colorFocusPrimary: '#398ae7',
    textColorFocusPrimary: 'white',
    colorHoverPrimary: 'white',
    textColorHoverPrimary: '#398ae7',
    colorPressedPrimary: '#398ae7',
    borderPressedPrimary: '1px solid #398ae7',
    textColorPressedPrimary: 'white'
  }
}

const settingStore = useSettingStore();
const theme = computed(() => settingStore.darkMode ? darkTheme : lightTheme);
</script>
