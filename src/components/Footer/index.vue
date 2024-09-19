<template>
    <footer class="footer">
        <div class="straightline"></div>

        <div class="link">
            <div class="right">
                <p class="infor">Thông tin liên hệ chúng mình</p>
                <ul class="social">
                    <li><a target="_blank" href="https://www.facebook.com/clbtienganhV.I.P.haui?locale=vi_VN"><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a target="_blank" href="https://www.tiktok.com/@vipenglishclub"><i class="fa-brands fa-tiktok"></i></a></li>
                    <li><a target="_blank" href="https://www.youtube.com/@hauiv.i.penglishclub3165"><i class="fa-brands fa-youtube"></i></a></li>
                </ul>
            </div>
            <div class="logo">
                <!-- <p>Câu lạc bộ tiếng anh V.I.P</p> -->
                <!-- <img src="@/assets/img/favicon.jpg" alt=""> -->
            </div>
        </div>
        <div class="copyright">
            Copyright © 2024 V.I.P Team of Developers
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@import '@styles/_mixins.scss';
    .footer {
        width: 100%;
        position: relative;
        font-weight: 600;

        .straightline {
            width: 100%;
            height: 0.1px;
            background: #8271bb;
        }

        .logo {
            position: absolute;
            top: 20px;
            left: 120px;
            border-radius: 50%;

            img {
                width: 7%;
                border-radius: 50%;
                border: 5px solid #f6f6f6;
                transition: box-shadow 0.3s ease;

                &:hover {
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
                }
            }
        }

        .link {
            .infor {
                font-weight: 500;
                text-align: end;
                margin-right: 100px;
                font-size: 16px;
                line-height: 0.5;
                margin-top: 30px;
                @include mobile{
                    font-size: 12px;
                    margin-right: 20px;
                }
            }

            .social {
                display: flex;
                justify-content: flex-end;
                margin-right: 100px;
                @include mobile{
                    margin-right: 15px;
                }

                li {
                    list-style-type: none;
                    font-size: 16px;
                    line-height: 0.5;
                    padding: 5px 10px;
                    cursor: pointer;

                    .fa-tiktok {
                        color: black;
                    }

                    .fa-facebook {
                        color: blue;
                    }

                    .fa-youtube {
                        color: red;
                    }
                }
            }
        }

        .copyright {
            text-align: center;
            font-size: 18px;
            margin-bottom: 20px;
            @include mobile{
                font-size: 13px;

            }
        }
    }
</style>
