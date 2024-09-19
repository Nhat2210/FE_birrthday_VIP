<script setup lang="ts">
import { useRouter } from 'vue-router';
const { push } = useRouter();
const handleRouter = () => {
    push('/signup')
}
</script>
<template>
    <div class="container_menu">
        <ul class="list">
            <li class="list_item">
                <a href="#" @click="push('./')">
                    <img src="@/assets/img/logotransferbg.png" alt="">
                </a>
            </li>
            <li class="list_item"><AnimateButton @click="handleRouter()"/></li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
@import '@styles/_mixins.scss';
    *{
        margin: 0;
        padding: 0;
    }

    .container_menu{
        // position: fixed;
        // width: 100%;
        // z-index: 999;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }
    .list{
        padding: 9px 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        cursor: pointer;
        &_item{
            font-size: 15px;
            list-style-type: none;
            font-weight: 500;
        }
        &_item:first-child{
            font-size: 17px;
            font-weight: 600;
        }
        a{
            width: 10%;
        }
        
        img{
            width: 70px;
            position: absolute;
            top: 0;
            @include mobile{
                width: 50px;
                position: absolute;
                left: 20px;
            }
        }
        button{
            @include mobile{
            }
        }

    }
</style>