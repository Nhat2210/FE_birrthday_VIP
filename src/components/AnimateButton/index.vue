<script lang="ts" setup>
const { push } = useRouter();
// const handleButton = () => {
//   push('/signup');
//   window.scrollTo({ top: 0});
// }
</script>
<template>
<button>
  <slot>Tham gia</slot>
  <div class="arrow-wrapper">
        <div class="arrow"></div>

  </div>
</button>
</template>
<style scoped lang="scss">
@import '@styles/_mixins.scss';
button {
  padding: 1.3em 3em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: 1px solid #6ea3f1;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  @include mobile{
    padding: 1em 1.2em;
    font-size: 8px;
  }
}

button:hover {
  background-color: #6ea3f1;
  box-shadow: 0px 15px 20px rgba(118, 178, 225, 0.4);
  color: #fff;
  transform: translateY(-1px);
}

button:active {
  transform: translateY(-1px);
}
</style>