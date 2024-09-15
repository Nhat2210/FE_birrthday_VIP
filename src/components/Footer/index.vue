<template>
    <footer class="footer">
        <div class="straightline">
        </div>
        <div class="logo">
            <img src="" alt="">
        </div>
        <div class="link">
            <p class="infor">Thông tin liên hệ chúng mình</p>
            <ul class="social">
                <li><a target="_blank" href="https://www.facebook.com/clbtienganhV.I.P.haui?locale=vi_VN"><i class="fa-brands fa-facebook"></i></a></li>
                <li><a target="_blank" href="https://www.tiktok.com/@vipenglishclub"><i class="fa-brands fa-tiktok"></i></a></li>
                <li><a target="_blank" href="https://www.youtube.com/@hauiv.i.penglishclub3165"><i class="fa-brands fa-youtube"></i></a></li>
            </ul>
        </div>
        <div class="copyright">
            Copyright © 2024 VIP DEV
        </div>
    </footer>
    
</template>
<style scoped>
    .copyright{
        text-align: center;
        font-size: 18px;
    }
    .infor{
        font-weight: 500;
        text-align: end;
        margin-right: 100px;
        font-size: 16px;
        line-height: 0.5;
    }
    .footer{
        width: 100%;
        font-weight: 600;
    }
    .straightline{
        width: 100%;
        height: 0.1px;
        /* background: linear-gradient( to right, #d5e2f6 ,#6ea3f1 );; */
        background: #000000;
    }
    .fa-tiktok{
        color: black
    }
    .fa-facebook{
        color:blue;
    }
    .fa-youtube{
        color: red;
    }
    .social li{
        list-style-type: none;
        font-size: 16px;
        line-height: 0.5;
        padding: 5px 10px;
        cursor: pointer;
    }
    .social{
        display: flex;
        justify-content: flex-end;
        margin-right: 100px;

    }
</style>