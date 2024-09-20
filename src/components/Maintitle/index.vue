<script setup lang="ts">
const { push } = useRouter();
const handleRouter = () => {
    push('/signup');
}
</script>


<template>
    <div class="wrapper">
        <div class="maintitle">
            <h2 class="maintitle_title" 
            data-aos="fade-in"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos-offset="150"
            >
                CHÀO MỪNG SINH NHẬT LẦN <span class="maintitle_title_text">THỨ 13</span> <br> CÂU LẠC BỘ TIẾNG ANH V.I.P
            </h2>
            <p class="maintitle_content"
            data-aos="fade-in"
            data-aos-delay="100"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-offset="150"
            >
            10/10/2011 - 10/10/2024, chặng đường 13 năm đã đi qua với biết bao thăng trầm, nơi kết nối những tâm hồn đồng điệu đam mê, cùng nhau viết nên bản giao hưởng thời gian đầy cảm hứng. Những kỷ niệm đáng nhớ đã được khắc ghi qua từng thế hệ thành viên của CLB. Mỗi thế hệ là một giai điệu, mỗi VIPer lại mang trong mình một âm hưởng riêng biệt. Hãy cùng chúng tớ tạo nên giai điệu tuyệt vời nhất cho bản giao hưởng thứ 13 tràn ngập cảm xúc này nhé!
            </p>
            <div class="maintitle_button"
            >
                <AnimateButton @click="handleRouter()"/>
            </div>
        </div>
    </div>       
</template>
<style scoped lang="scss">
@import '@styles/_mixins.scss';
.wrapper
    {
        background-color: #f6f6f6;
        @include mobile{
            height: 100%;
        }
    }
    .maintitle{
        padding: 100px 0;
        position: relative;
        @include mobile{
            padding: 50px 10px;
        }
        &_title{
            text-transform: uppercase;
            font-size: 44px;
            margin: 0;
            line-height: 1.2;
            text-align: center;
            // &_title::after{
            // content: '';
            // position: absolute;
            // left: 24%;
            // top: 32%;
            // width: 52%;
            // height: 15px;
            // background: linear-gradient(to bottom, #398ae7, #ffffff);
            // z-index:1;
            // }
            @include mobile{
                text-transform: uppercase;
                font-size: 22px;
                margin: 0;
                text-align: center;
            }
            &_text{
                background: linear-gradient(to right, #398ae7, #8271bb);
                -webkit-background-clip: text; 
                color: transparent; 
            }
        }
        &_button{
            display: flex;
            justify-content: center;
            // font-size: 15px;
            // button{
            //     background-color: #ddd6f3;
            //     border: 1px solid black;
            // }
        }
        &_content{
            font-size: 18px;
            max-width: 750px;
            text-align: center;
            display: block;
            margin: 0 auto;
            padding: 30px 0;
            margin-bottom: 10px;
            @include mobile{
                font-size: 13px;
                width: 90%;
                margin-bottom: 0;
                padding: 15px 0;
            }
        }
    }
</style>
