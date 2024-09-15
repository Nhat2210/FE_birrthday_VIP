<script setup lang="ts">
</script>
<template>
    
    <div class="memory"
    >
        <div class="memory_text">
            <h2 class="memory_text_title"
            data-aos="fade-in"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-offset="100"
            >Cùng nhìn lại <span>hành trình</span> vừa qua</h2>
        <p class="memory_text_addInfor"
        data-aos="fade-in"
        data-aos-duration="2000"
        data-aos-delay="100"
        data-aos-easing="ease-in-out"
        data-aos-offset="100"
        style="font-size: 20px;"
        >Nơi ta tìm lại miền ký ức xưa</p>
        </div>

        <n-tabs type="segment" 
        class="test"
        animated 
        :style="{
        '--n-tab-text-color': '#fff',
        '--n-tab-padding': '13px 20px',
        '--n-tab-font-size': '18px',
        '--n-tab-border-radius': '5px',
        '--n-color-segment': '#ddd',
        '--n-tab-color-segment': '#9bbff5',
        '--n-tab-text-color-active': '#fff',
        '--n-tab-text-color-hover': '#fff'
        }" >
            <n-tab-pane name="oasis" tab="V.I.P 11">
                <div class="card">
                    <div class="card_infor">
                        <div class="card_infor_title"
                        data-aos="fade-right"
                        data-aos-duration="300"
                        data-aos-easing="ease-in-out"
                        data-aos-offset="100"              
                        >V.I.P 11</div>
                        <button class="card_infor_button"
                        data-aos="fade-right"
                        data-aos-duration="300"
                        data-aos-delay="100"
                        data-aos-easing="ease-in-out"
                        data-aos-offset="100"  
                        >Vươn tầm cao mới</button>
                        <div class="card_infor_content"
                        data-aos="fade-right"
                        data-aos-duration="300"
                        data-aos-delay="200"
                        data-aos-easing="ease-in-out"
                        data-aos-offset="100"  
                        >11 năm một chặng đường, trải qua mỗi thế hệ,<br>
                             HIT là những hoài niệm tiếc nuối của một thời tuổi trẻ,<br>
                              là nơi mà ở đó các bạn được học và được là chính mình,<br>
                             để rồi khi nhìn lại sẽ càng thấy trân trọng và tự hào…
                        </div>
                    </div>
                    <div class="card_image"
                    data-aos="fade-left"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-offset="100"  
                    >
                        <img src="@/assets/img/vip11.jpg" alt="">
                    </div>
                </div>
            </n-tab-pane>
            <n-tab-pane name="the beatles" tab="V.I.P 12">
                <div class="card">
                    <div class="card_infor">
                        <div class="card_infor_title"
                        data-aos="fade-right"
                        data-aos-duration="300"
                        data-aos-easing="ease-in-out"
                        data-aos-offset="100"              
                        >V.I.P 12</div>
                        <div class="card_infor_button"
                        data-aos="fade-right"
                        data-aos-duration="300"
                        data-aos-easing="ease-in-out"
                        data-aos-offset="100"              
                        >Vươn tầm cao mới</div>
                        <div class="card_infor_content"
                        data-aos="fade-right"
                        data-aos-delay="300"
                        data-aos-duration="300"
                        data-aos-easing="ease-in-out"
                        data-aos-offset="100"  
                        >12 năm một chặng đường, trải qua mỗi thế hệ,<br>
                             HIT là những hoài niệm tiếc nuối của một thời tuổi trẻ,<br>
                              là nơi mà ở đó các bạn được học và được là chính mình,<br>
                             để rồi khi nhìn lại sẽ càng thấy trân trọng và tự hào…
                        </div>
                    </div>
                    <div class="card_image"
                    data-aos="fade-left"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-offset="100"  
                    >
                        <img src="@/assets/img/vip11.jpg" alt="">
                    </div>
                </div>
            </n-tab-pane>
            <n-tab-pane name="jay chou" tab="V.I.P 13">
                <div class="card">
                    <div class="card_infor">
                        <div class="card_infor_title"
                        data-aos="fade-right"
                        data-aos-duration="300"
                        data-aos-easing="ease-in-out"
                        data-aos-offset="100"              
                        >V.I.P 13</div>
                        <button class="card_infor_button"
                        data-aos="fade-right"
                        data-aos-duration="300"
                        data-aos-delay="100"
                        data-aos-easing="ease-in-out"
                        data-aos-offset="100"  
                        >Vươn tầm cao mới</button>
                        <div class="card_infor_content"
                        data-aos="fade-right"
                        data-aos-duration="300"
                        data-aos-delay="200"
                        data-aos-easing="ease-in-out"
                        data-aos-offset="100"  
                        >11 năm một chặng đường, trải qua mỗi thế hệ,<br>
                             HIT là những hoài niệm tiếc nuối của một thời tuổi trẻ,<br>
                              là nơi mà ở đó các bạn được học và được là chính mình,<br>
                             để rồi khi nhìn lại sẽ càng thấy trân trọng và tự hào…
                        </div>
                    </div>
                    <div class="card_image"
                    data-aos="fade-left"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-offset="100"  
                    >
                        <img src="@/assets/img/vip11.jpg" alt="">
                    </div>
                </div>
            </n-tab-pane>
        </n-tabs>
    </div>
</template>
<style scoped lang="scss">
    @import '@styles/index.scss';
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .memory{
        padding: 100px 0;
        background: #f6f6f6;
        &_text{
        padding-bottom: 100px;
            &_title{
                font-size: 40px;
                text-align: center;
                text-transform: uppercase;
                span{
                    background: linear-gradient(to right, #398ae7, #8271bb);
                    -webkit-background-clip: text; 
                    color: transparent; 
                }
            }
            &_addInfor{
                font-size: 18px;
                text-align: center;
            }
        }
    }
    .card{
        width: 100%;
        display: flex;
        justify-content: space-around;
        &_infor{
            width: 40%;
            margin-top: 50px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-left: 30px;
            &_title{
                font-size: 36px;
                font-weight: 600;
                background: linear-gradient(to right, #398ae7, #8271bb);
                -webkit-background-clip: text; 
                color: transparent; 
            }
            &_button{
                background: #fff;
                border: none;
                padding: 10px 0px;
                border-radius: 15px;
                font-size: 18px;
                width: 220px;
                margin: 15px 0;
            }
            &_content{
                font-size: 16px;
                line-height: 1.2;
            }
        }
        &_image{
            margin-top: 50px;;
            width: 50%;
            height: 400px;
            border: 15px solid #fff;
            border-radius: 15px;
            overflow: hidden;
            background:#fff;
            img{
                object-fit: cover;
                width: 100%;
                border-radius: 15px;
                height: 100%;
            }
        }
    }


</style>