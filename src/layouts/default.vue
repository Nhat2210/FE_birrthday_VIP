<template>
  <div>
    <!-- <Header/> -->
    <router-view v-slot="{ Component, route }">
      <transition name="slide">
        <component :is="Component" :key="route" />
      </transition>
    </router-view>
	  <!-- <Footer/> -->
  </div>
</template>