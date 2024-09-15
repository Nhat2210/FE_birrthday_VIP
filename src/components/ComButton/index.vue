<script lang="ts" setup>
const { push } = useRouter();
</script>
<template>
    <div class="button"  @click="push('/signup')">Tham gia</div>
</template>

<style lang="scss" scoped>
    .button{
        width: 120px;
        border-radius: 12px;
        text-align: center;
        border: none;
        cursor: pointer;
        padding: 10px 10px;
        // background: #6ea3f2;
        background: linear-gradient(to right, #398ae7, #8271bb);
        // -webkit-background-clip: text; 
        // color: transparent; 
        color: #fff;
    }
    //start
</style>