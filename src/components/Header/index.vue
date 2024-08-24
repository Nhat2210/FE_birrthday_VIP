<template>
    <div class="container_menu">
        <ul class="list">
            <li class="list_item"><a href="#">VIP English Club</a></li>
            <li class="list_item"><a href="#">QR Check In</a></li>
            <li class="list_item"><a href="#">QR Chuyển khoản</a></li>
            <li class="list_item"><a href="#">Tạo avatar</a></li>
            <li class="list_item"><ComButton/></li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .list{
        z-index: 999;
        padding: 10px 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: linear-gradient(to right,#bfddff,#ddd6f3);
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
            text-decoration: none;
            color:black;
        }
    }
</style>