<script setup lang="ts">

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo magni, facilis sapiente, veniam accusamus, quam molestias facere saepe eligendi fugit error. Cum officiis repellendus ad sunt iure laboriosam reprehenderit aperiam.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore repellendus iure, repudiandae et modi est deserunt nisi enim aspernatur soluta quas minima voluptas quis vero ullam fugit! Magni, corporis debitis.
            </p>
            <div class="maintitle_button"
            >
                <AnimateButton/>
            </div>
        </div>
    </div>       
</template>
<style scoped lang="scss">
.wrapper
    {
        background-color: #f6f6f6;
        height: 100vh;
    }
    .maintitle{
        padding: 100px 0;
        position: relative;
        &_title{
            text-transform: uppercase;
            font-size: 44px;
            margin: 0;
            z-index: 10;
            line-height: 1.2;
            text-align: center;


            &_title::after{
            content: '';
            position: absolute;
            left: 24%;
            top: 32%;
            width: 52%;
            height: 15px;
            background: linear-gradient(to bottom, #398ae7, #ffffff);
            z-index:1;
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
            max-width: 800px;
            text-align: center;
            display: block;
            margin: 0 auto;
            padding: 20px 0;
        }
    }
</style>
