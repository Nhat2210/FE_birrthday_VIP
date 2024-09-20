<script setup lang="ts">

</script>

<template>
    <section id="admin-congratulation">
        <div class="container">
            <div class="main_title"
            data-aos="fade-out"
            data-aos-duration="300"
            data-aos-easing="ease-in-out"
            data-aos-offset="100"  
            >
                <h2>Ban chủ nhiệm</h2>
                <h3>Gửi gắm đôi lời tới V.I.P tuổi <span>thứ 13</span></h3>
            </div>

            <div class="admin-member">
                <div class="admin-card pcn left"
                data-aos="fade-right"
                data-aos-duration="300"
                data-aos-easing="ease-in-out"
                data-aos-offset="100"  
                >
                    <img src="@/assets/img/huong2.jpg" alt="" class="avatar">
                    <div class="name">Dương Thu Hương</div>
                    <div class="position">Phó chủ nhiệm</div>
                    <div class="greeting">
                        <span class="content">
                            Bước sang tuổi thứ 13, xin chúc cho V.I.P ngày càng thành công hơn nữa! Chúc cho tất cả thành viên và cựu thành viên của CLB nhiều sức khỏe, học tập thật tốt và vững bước trên con đường mình đã chọn.
                            Hãy cùng đồng hành cùng V.I.P English Club trong những chặng đường sắp tới bạn nhé!
                        </span>
                    </div>
                </div>

                <div class="admin-card cn middle"
                data-aos="fade-up"
                data-aos-duration="300"
                data-aos-easing="ease-in-out"
                data-aos-offset="100"  
                >
                    <img src="@/assets/img/quyen.jpg" alt="" class="avatar">
                    <div class="name">Vương Linh Quyền</div>
                    <div class="position">Chủ nhiệm</div>
                    <div class="greeting">
                        <span class="content">
                            Quyền: Bước sang tuổi thứ 13, xin chúc cho V.I.P English Club ngày càng thành công và phát triển vững mạnh! Chúc cho tất cả thành viên của đại gia đình nhà mình luôn dồi dào sức khỏe, học tập tốt và thành công trên con đường đã chọn. Mong rằng V.I.P sẽ mãi trong tim chúng ta, sẽ luôn là một kỷ niệm tuyệt vời thời sinh viên nhé
                            Hãy cùng đồng hành cùng V.I.P English Club
                        </span> 
                    </div>
                </div>
                <div class="admin-card pcn left"
                data-aos="fade-up-right"
                data-aos-duration="300"
                data-aos-easing="ease-in-out"
                data-aos-offset="100"  
                >
                    <img src="@/assets/img/minmin.jpg" alt="" class="avatar">
                    <div class="name">Nguyễn Hồng Minh</div>
                    <div class="position">Phó chủ nhiệm</div>
                    <div class="greeting">
                        <span class="content">
                            Bước sang tuổi thứ 13, xin chúc cho V.I.P ngày càng thành công hơn nữa! Chúc cho tất cả thành viên và cựu thành viên của CLB nhiều sức khỏe, học tập thật tốt và vững bước trên con đường mình đã chọn.
                            Hãy cùng đồng hành cùng V.I.P English Club trong những chặng đường sắp tới bạn nhé!
                        </span>
                    </div>
                </div>

            </div>
        </div>
    </section>

</template>

<style scoped lang="scss">
@import '@styles/_mixins.scss';
#admin-congratulation{
    background-color: #fff;
    padding-bottom: 100px;
    box-sizing: border-box;
    overflow: hidden;
    .main_title{
        h2{
            padding-top: 100px;
            background: linear-gradient(to right, #398ae7, #8271bb);
            -webkit-background-clip: text; 
            color: transparent; 
            @include mobile{
                padding-top: 70px;
            }
        }
        h3{
            margin-bottom: 50px;
            @include mobile{
                margin-bottom: 0;
            }
        }
        span{
            background: linear-gradient(to right, #398ae7, #8271bb);
            -webkit-background-clip: text; 
            color: transparent; 
        }
    }
    h2,h3{
        margin: 0;
        font-size: 40px;
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
        @include tablet{
            font-size: 28px;
        }
        @include mobile {
            font-size: 20px;
        }
        span{
            background: linear-gradient(to right, #398ae7, #8271bb);
            -webkit-background-clip: text; 
            color: transparent; 
        }
    }
    .admin-member{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 4rem 0 3rem 0;
        .admin-card{
            opacity: 0.8;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 23%;
            height: 450px;
            margin: 0 3rem;
            padding: 3rem;
            background-color: #fff;
            border-radius: 10px;
            border: 1px solid rgb(211,211,211);
            box-shadow: 
                0px 1px 3.5px 0px rgba(0, 0, 0, 0.04),
                0px 2px 6px 0px rgba(0, 0, 0, 0.04),
                0px 4px 11px 0px rgba(0, 0, 0, 0.06);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            &:hover {
                opacity: 1;
                transform: translateY(-5px); 
                box-shadow: 
                    0px 4px 8px rgba(0, 0, 0, 0.1), 
                    0px 6px 20px rgba(0, 0, 0, 0.1);
            }
            &.pcn {
            transform: translate(0, 4rem); 
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            opacity: 0.8;

            &:hover {
                opacity: 1;
                transform: translateY(-1rem) translate(0, 4rem); 
                box-shadow: 
                    0px 4px 8px rgba(0, 0, 0, 0.1),
                    0px 6px 20px rgba(0, 0, 0, 0.1);
            }
            }
            .avatar{
                width: 12rem;
                height: 12rem;
                border-radius: 50%;
                overflow: hidden;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            &.pcn{
                transform: translate(0, 4rem);
            }
            @include tablet{
                margin: 2rem;
                width: 50%;
                &.cn{
                    order: -1;
                }
                &.pcn{
                    transform: translate(0);
                }
            }
            @include mobile{
                margin: 2rem 0;
                width: 70%;
                &.cn{
                    order: -1;
                }
                &.pcn{
                    transform: translate(0);
                }
            }
        }
        .name{
            font-size: 23px;
            font-weight: bold;
            margin-top: 2rem;
            @include tablet{
                font-size: 20x;
            }
            @include mobile{
                font-size: 16px;
            }
        }
        .position{
            font-size: 16px;
            font-weight: 600;
        }
        .greeting{
            font-size: 16px;
            margin-top: 2rem;
            line-height: 1.4;
            text-align: center;
            @include tablet{
                font-size: 15px;
            }
            @include mobile{
                font-size: 12px;
            }
        }
    }
}
</style>