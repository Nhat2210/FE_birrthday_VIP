<script setup lang="ts">

</script>

<template>
    <section id="admin-congratulation">
        <div class="container">
            <h3>Lời chúc từ Ban Chủ Nhiệm</h3>

            <div class="admin-member">
                <div class="admin-card pcn left">
                    <img src="@/assets/img/huong.jpg" alt="" class="avatar">
                    <div class="name">Dương Thu Hương</div>
                    <div class="greeting">
                        <span class="content">
                            Bước sang tuổi thứ 13, xin chúc cho V.I.P ngày càng thành công hơn nữa! Chúc cho tất cả thành viên và cựu thành viên của CLB nhiều sức khỏe, học tập thật tốt và vững bước trên con đường mình đã chọn.
                            Hãy cùng đồng hành cùng V.I.P English Club trong những chặng đường sắp tới bạn nhé!
                        </span>
                    </div>
                </div>
                <div class="admin-card cn middle">
                    <img src="@/assets/img/quuyen.jpg" alt="" class="avatar">
                    <div class="name">Vương Linh Quyền</div>
                    <div class="greeting">
                        <span class="content">
                            Bước sang tuổi thứ 13, xin chúc cho V.I.P ngày càng thành công hơn nữa! Chúc cho tất cả thành viên và cựu thành viên của CLB nhiều sức khỏe, học tập thật tốt và vững bước trên con đường mình đã chọn.
                            Hãy cùng đồng hành cùng V.I.P English Club trong những chặng đường sắp tới bạn nhé!
                        </span> 
                    </div>
                </div>
                <div class="admin-card pcn left">
                    <img src="@/assets/img/minh.jpg" alt="" class="avatar">
                    <div class="name">Nguyễn Hồng Minh</div>
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
@import '@styles/mixins';
#admin-congratulation{
    min-height: 100vh;
    background-color: #f6f6f6;
    overflow: hidden;
    h3{
        padding-top: 5rem;
        margin: 0;
        font-size: 32px;
        font-weight: bold;
        text-align: center;
        @include tablet{
            font-size: 28px;
        }
        @include mobile {
            font-size: 20px;
        }
    }
    .admin-member{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 4rem 0 3rem 0;
        .admin-card{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 20%;
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
            .avatar{
                width: 10rem;
                height: 10rem;
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