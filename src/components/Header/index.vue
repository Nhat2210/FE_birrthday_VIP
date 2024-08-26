<template>
    <div class="container_menu">
        <ul class="list">
            <li class="list_item"><a href="#">VIP English Club</a></li>
            <li class="list_item"><ComButton/></li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .container_menu{
        position: fixed;
        width: 100%;
        z-index: 999;
    }
    .list{
        z-index: 999;
        padding: 10px 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
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