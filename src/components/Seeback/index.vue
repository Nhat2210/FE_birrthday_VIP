<script setup lang="ts">
</script>
<template>
    <div class="memory">
        <n-tabs type="segment" animated>
            <n-tab-pane name="oasis" tab="VIP 11">
                <div class="card">
                    <div class="card_infor">
                        <div class="card_infor_title">VIP 11</div>
                        <button class="card_infor_button">Vươn tầm cao mới</button>
                        <div class="card_infor_content">11 năm một chặng đường, trải qua mỗi thế hệ,
                             HIT là những hoài niệm tiếc nuối của một thời tuổi trẻ,
                              là nơi mà ở đó các bạn được học và được là chính mình,
                             để rồi khi nhìn lại sẽ càng thấy trân trọng và tự hào…
                        </div>
                    </div>
                    <div class="card_image">
                        <img src="@/assets/img/vip11.jpg" alt="">
                    </div>
                </div>
            </n-tab-pane>
            <n-tab-pane name="the beatles" tab="VIP 12">
            Hey Jude
            </n-tab-pane>
            <n-tab-pane name="jay chou" tab="VIP 13">
            Qilixiang
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
        padding: 50px 0;
        background: #f6f6f6;
    }
    .card{
        width: 100%;
        height: 700px;
    }


</style>