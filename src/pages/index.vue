<script lang="ts" setup>
    // execute scroll indicator
    window.onscroll = function() {
    myFunction();
    };

    function myFunction() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    const myBar = document.getElementById("mybar");
    if (myBar) {
        myBar.style.width = scrolled + "%";
    }
    }

</script>

<template>

    <div class="wrapper">
        <!-- start header  -->
        <Header />
        <!-- end header  -->


        <!-- start scroll indicator-->
         <div class="scroll">
            <div class="scroll_bar" id="mybar"></div>
         </div>
        <!--end scroll indicator-->


        <!-- start mainbg  -->
        <div class="mainbackground">
            <img class="mainbackground_img" src="../assets/img/mainbackground.jpg" alt="">
        </div>
        <!-- end mainbg  -->

        <!-- start maintitle  -->
        <div class="wrapper">
            <div class="maintitle">
                <h2 class="maintitle_title">
                    CHÀO MỪNG SINH NHẬT LẦN <span class="maintitle_title_text">THỨ 13</span> <br> CÂU LẠC BỘ TIẾNG ANH VIP
                </h2>
                <p class="maintitle_content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo magni, facilis sapiente, veniam accusamus, quam molestias facere saepe eligendi fugit error. Cum officiis repellendus ad sunt iure laboriosam reprehenderit aperiam.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore repellendus iure, repudiandae et modi est deserunt nisi enim aspernatur soluta quas minima voluptas quis vero ullam fugit! Magni, corporis debitis.
                </p>
                <div class="maintitle_button">
                    <ComButton/>
                </div>
            </div>
        </div>
        <!-- end maintitle  -->

        <!--start countdown-->
        <div class="countdown">
            <div class="countdown_image">
                <img src="../assets/img/Countdown.jpg" alt="">
            </div>
            <div class="countdown_number">

            </div>
        </div>
        <!--end countdown-->

        <AdminCongrats/>
    </div>

</template>
<style scoped lang="scss">
    .container_menu{
        position: fixed;
        width: 100%;
    }
    .scroll{
        position: fixed;
        margin-top: 60px;
        width: 100%;
        height: 4px;
        background: #f6f6f6;
        &_bar{
            height: 4px;
            background: #faaca8;
            width: 0%;
        }
    }
    .mainbackground{
        padding-top: 60px;
        object-fit: cover;
        &_img{
            width: 100%;
        }
    }
    .wrapper
    {
        background-color: #f3f3f3;
    }
    .maintitle{
        padding: 50px 0;
        &_title{
            text-transform: uppercase;
            font-size: 38px;
            background: linear-gradient(to right, #bfddff, #ddd6f3);
            -webkit-background-clip: text; 
            color: transparent; 
            margin: 0;
            line-height: 1.2;
            text-align: center;
            &_text{
                color: #faaca8;
            }
        }
        &_button{
            display: flex;
            justify-content: center;
            font-size: 15px;
            button{
                background-color: #ddd6f3;
                border: 1px solid black;
            }
        }
        &_content{
            font-size: 18px;
            max-width: 700px;
            text-align: center;
            display: block;
            margin: 0 auto;
            padding: 20px 0;
        }
    }
    .countdown{

        padding: 30px 0; 
        width: 100%;
        &_image{
            img{
                display: block;
                margin: 0 auto;
                width: 70%;
                object-fit: cover;
                object-position: 100% 0;
                height: 550px;
            }   
        }
    }
</style>