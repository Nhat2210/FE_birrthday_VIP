<template>
    <div class="birthday-layout">
      <n-grid cols="1 s:1 m:1 l:2 xl:2 2xl:2" responsive="screen">
        <n-grid-item>
          <div class="layout-left">
            <slot name="left"></slot>
            <img class="left-birthday" src="@/assets/signup/birthday.png" alt="" />
            <img class="left-cloud" src="@/assets/signup/cloud.png" alt="" />
          </div>
        </n-grid-item>
        <n-grid-item>
          <div class="layout-right">
            <slot name="right"></slot>
          </div>
        </n-grid-item>
      </n-grid>
    </div>
  </template>
  
  <style src="./BirthdayLayout.scss"></style>
  