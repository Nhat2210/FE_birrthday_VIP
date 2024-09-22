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
        >Nơi ta tìm lại miền ký ức xưa</p>
        </div>

        <n-tabs type="segment" 
        animated 
        class="memory_segment"
        :style="{
        '--n-tab-text-color': '#fff',
        '--n-tab-padding': '13px 20px',
        '--n-tab-font-size': '18px',
        '--n-tab-border-radius': '5px',
        '--n-color-segment': '#ddd',
        '--n-tab-color-segment': '#9bbff5',
        '--n-tab-text-color-active': '#fff',
        '--n-tab-text-color-hover': '#fff',
        '--n-font-weight-strong': '600'
        }" >
            <n-tab-pane name="oasis" tab="V.I.P Khóa 10">
                <div class="card">
                    <div class="card_infor">
                        <div class="card_infor_title"
                        data-aos="fade-right"
                        data-aos-duration="300"
                        data-aos-easing="ease-in-out"
                        data-aos-offset="100"              
                        >Hành Trình V.I.P Khóa 10</div>
                        <button class="card_infor_button"
                        data-aos="fade-right"
                        data-aos-duration="300"
                        data-aos-delay="100"
                        data-aos-easing="ease-in-out"
                        data-aos-offset="100"  
                        >Đoàn kết vững bước, dựng xây tương lai</button>
                        <div class="card_infor_content"
                        data-aos="fade-right"
                        data-aos-duration="300"
                        data-aos-delay="200"
                        data-aos-easing="ease-in-out"
                        data-aos-offset="100"  
                        >10 năm một chặng đường khẳng định sức mạnh của sự đoàn kết.
                         Kề vai sát cánh vai, cùng nhau vượt qua những khó khăn,
                          thách thức để kiến tạo một tương lai tươi sáng!
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
            <n-tab-pane name="the beatles" tab="V.I.P Khóa 11">
                <div class="card">
                    <div class="card_infor">
                        <div class="card_infor_title"
                        data-aos="fade-right"
                        data-aos-duration="300"
                        data-aos-easing="ease-in-out"
                        data-aos-offset="100"              
                        >Hành Trình V.I.P Khóa 11</div>
                        <div class="card_infor_button"
                        data-aos="fade-right"
                        data-aos-duration="300"
                        data-aos-easing="ease-in-out"
                        data-aos-offset="100"        
                        style="text-align: center;"      
                        >Tiếp nối đam mê, vươn xa cùng phát triển</div>
                        <div class="card_infor_content"
                        data-aos="fade-right"
                        data-aos-delay="300"
                        data-aos-duration="300"
                        data-aos-easing="ease-in-out"
                        data-aos-offset="100"  
                        >12 Với ngọn lửa đam mê luôn cháy bỏng, cùng nhau viết tiếp giai điệu
                        thanh xuân rực rỡ. Một năm với đầy ắp những kỷ niệm khó quên. 
                        Những trái tim cùng chung nhịp đập, vượt qua mọi khó khăn, thách thức,
                        vươn xa cùng phát triển!
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
            <n-tab-pane name="jay chou" tab="V.I.P Khóa 12">
                <div class="card">
                    <div class="card_infor">
                        <div class="card_infor_title"
                        data-aos="fade-right"
                        data-aos-duration="300"
                        data-aos-easing="ease-in-out"
                        data-aos-offset="100"              
                        >Hành Trình V.I.P Khóa 12</div>
                        <button class="card_infor_button"
                        data-aos="fade-right"
                        data-aos-duration="300"
                        data-aos-delay="100"
                        data-aos-easing="ease-in-out"
                        data-aos-offset="100"  
                        >Phát triển không ngừng, khẳng định vươn xa</button>
                        <div class="card_infor_content"
                        data-aos="fade-right"
                        data-aos-duration="300"
                        data-aos-delay="200"
                        data-aos-easing="ease-in-out"
                        data-aos-offset="100"  
                        >Một năm của sự đổi mới và phát triển! Những bước tiến vượt bậc, 
                        những thay đổi tích cực đã phần nào khẳng định được vị thế 
                        và sẵn sàng chinh phục những đỉnh cao mới!
                        </div>
                    </div>
                    <div class="card_image"
                    data-aos="fade-left"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-offset="100"  
                    >
                        <img src="@/assets/img/vip12.jpg" alt="">
                    </div>
                </div>
            </n-tab-pane>
        </n-tabs>
    </div>
</template>
<style scoped lang="scss">
@import '@styles/_mixins.scss';
    .memory {
    padding: 100px 0;
    background: #f6f6f6;
    
    @include mobile {
        padding: 50px 0;
    }
    
    &_text {
        padding-bottom: 100px;
        @include mobile {
            padding-bottom: 20px;
        }
        
        &_title {
            font-size: 40px;
            text-align: center;
            text-transform: uppercase;
            
            @include mobile {
                font-size: 22px;
                width: 99%;
            }
            
            span {
                background: linear-gradient(to right, #398ae7, #8271bb);
                -webkit-background-clip: text;
                color: transparent;
            }
        }
        
        &_addInfor {
            font-size: 2rem;
            text-align: center;
            
            @include mobile {
                font-size: 18px;
            }
        }
    }
}

.card {
    width: 100%;
    display: flex;
    justify-content: space-around;
    
    @include mobile {
        flex-direction: column; // Layout dọc cho mobile
        align-items: center;
    }
    
    &_infor {
        width: 40%;
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 30px;
        justify-content: center;
        
        @include mobile {
            width: 90%;
            margin-left: 0;
            text-align: center;
            align-items: center;
        }
        
        &_title {
            font-size: 36px;
            font-weight: 600;
            background: linear-gradient(to right, #398ae7, #8271bb);
            -webkit-background-clip: text;
            color: transparent;
        }
        
        &_button {
            background: #9bbff5;
            color: #fff;
            border: none;
            padding: 13px 10px;
            border-radius: 15px;
            font-size: 18px;
            width: 80%;
            margin: 15px 0;
        }
        
        &_content {
            font-size: 16px;
            line-height: 1.2;
        }
    }
    
    &_image {
        margin-top: 50px;
        width: 40%;
        border: 15px solid #fff;
        border-radius: 15px;
        overflow: hidden;
        background: #fff;
        
        @include mobile {
            width: 90%;
            height: auto; // Để ảnh tự động điều chỉnh kích thước cho mobile
        }
        
        img {
            object-fit: cover;
            width: 100%;
            border-radius: 15px;
            height: 100%;
            
            @include mobile {
                height: auto;
            }
        }
    }
}
</style>