<script setup lang="ts">
const { push } = useRouter();
const handleRouter = () => {
    push('/signup')
}
</script>
<template>
    <div class="container_timeline">
        <div class="introduce"
        data-aos="fade-right"
        data-aos-duration="300"
        data-aos-easing="ease-in-out"
        >
            <h2 class="introduce_title">Hướng dẫn</h2>
            <AnimateButton @click="handleRouter()"/>
        </div>
        <div class="timeline">
            <n-timeline size="large">
                <n-timeline-item
                data-aos="fade-right"
                data-aos-duration="300"
                data-aos-delay="300"
                data-aos-easing="ease-in-out"


                class="test"
                type="info"
                title="Chia sẻ thông tin cá nhân để đăng ký"
                time="2018-04-03 20:46"
                />
                <n-timeline-item
                data-aos="fade-left"
                data-aos-duration="300"
                data-aos-delay="600"
                data-aos-easing="ease-in-out"

                type="info"
                title="Xác nhận thông tin để đăng ký"
                time="2018-04-03 20:46"
                />
                <n-timeline-item
                data-aos="fade-right"
                data-aos-duration="300"
                data-aos-delay="900"
                data-aos-easing="ease-in-out"

                type="info"
                title="Chuyển khoản để hoàn tất đăng ký"
                time="2018-04-03 20:46"
                />
                <n-timeline-item
                data-aos="fade-left"
                data-aos-duration="300"
                data-aos-delay="1200"
                data-aos-easing="ease-in-out"

                type="info"
                title="Lưu lại mã QR checkin"
                time="2018-04-03 20:46"
                />
                <n-timeline-item
                data-aos="fade-right"
                data-aos-duration="300"
                data-aos-delay="1500"
                data-aos-easing="ease-in-out"

                type="info"
                title="Dùng mã QR để checkin khi tham buổi tiệc"
                time="2018-04-03 20:46"
                />
                <n-timeline-item
                data-aos="fade-left"
                data-aos-duration="300"
                data-aos-delay="1800"
                data-aos-easing="ease-in-out"

                type="info"
                title="Hoặc checkin bằng nhận diện khuôn mặt"
                time="2018-04-03 20:46"
                size="larger"
                />
            </n-timeline>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import '@styles/_mixins.scss';

    .container_timeline{
        background: #fff;
        padding: 100px 0;
        display: flex;
        justify-content: space-around;
        gap: 200px;
        @include mobile{
            display: flex;
            flex-direction: column;
            gap: 30px;
            padding: 50px 0;
        }
    }
    .timeline{
        @include mobile{
            padding: 0 50px;
        }
    }
    .introduce{

        align-self: center;
        &_title{
            font-size: 30px;
            margin: 0;
            font-weight: 600;
            letter-spacing: 0.3px;
            @include mobile{
                font-size: 22px;
            }
        }
        button{
            display: inline-block;
            font-size: 18px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 15px 35px;
            @include mobile{
                padding: 1em 1.2em;
                font-size: 8px;
            }
        }
    }
</style>