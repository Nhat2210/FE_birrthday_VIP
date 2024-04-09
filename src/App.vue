<template>
  <n-config-provider :theme-overrides="themeOverrides" :theme="theme">
    <router-view></router-view>
  </n-config-provider>
</template>

<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui';
import { darkTheme, lightTheme } from 'naive-ui'
import { useSettingStore } from '@/stores/setting'
const themeOverrides: GlobalThemeOverrides = {
  common: { 
    primaryColor: "#EF7C45FF",
    primaryColorHover: "#f37335"
  }
}

const settingStore = useSettingStore()
const theme = computed(() => settingStore.darkMode ? darkTheme : lightTheme)
</script>