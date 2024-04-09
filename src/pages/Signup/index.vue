<script>
  const options = Array.from(Array(17).keys()).reduce((a, b) => {
    if(b != 0){
      a.push({
        label: `K${b <= 9 ? '0' + b : b}`,
        value: `K${b}`
      })
    }
    return a
  }, [])
</script>

<template>
  <div class="signup">
    <n-grid cols="1 s:1 m:1 l:2 xl:2 2xl:2" responsive="screen">
      <n-grid-item >
        <div class="singup-left">
          <div class="left-body">
            <img src="@/assets/signup/logo.png" alt="" srcset="">
            <h1>Hãy chia sẻ thông tin cá nhân để đăng ký</h1>
            <p>Chúng mình rất vui mừng khi biết bạn quan tâm đến sự kiện sinh nhật của CLB chúng mình! Hãy hoàn thành các thông tin sau để đăng ký</p>
          </div>
          <img class="left-birthday" src="@/assets/signup/birthday.png" alt="">
          <img class="left-cloud" src="@/assets/signup/cloud.png" alt="">
        </div>
      </n-grid-item>
      <n-grid-item >
        <div class="singup-right">
          <div class="right-title">
            <h1>Bạn ơi</h1>
            <p>Đăng ký tham dự sinh nhật của HIT ngay thôi!</p>
          </div>

          <form action="#">
            <div class="form-element">
              <label for="">Họ và tên</label> <br>
              <n-input type="text" size="large" placeholder="Bùi Việt Hoàng" />
            </div>

            <div class="form-element">
              <label for="">Khóa</label> <br>
              <n-select size="large" :options="options" placeholder="Chọn khóa"/>
            </div>

            <div class="form-element">
              <label for="">Số điện thoại</label> <br>
              <n-input type="text" size="large" placeholder="0999999999" />
            </div>

            <div class="form-element">
              <label for="">Link facebook</label> <br>
              <n-input type="text" size="large" placeholder="https://www.facebook.com/MyNameBVH/" />
            </div>

            <div class="form-element">
              <label for="">Ảnh hồ sơ</label> <br>
              <n-upload
                directory-dnd
                accept="image/png, image/jpeg"
              >
                <n-upload-dragger>
                  <n-text style="font-size: 14px">
                    Kéo thả ảnh hoặc <span style="color: #007AFF;">tải lên</span>
                  </n-text>
                </n-upload-dragger>
              </n-upload>
            </div>

            <button class="btn-signup">Tiếp tục</button>
          </form>
        </div>
      </n-grid-item>
    </n-grid>

  </div>
 
</template>

<style lang="scss" scoped>
  @import '@styles/mixins';

  .signup {
    .singup-left {
      position: relative;
      background: rgb(253,200,48);
      background: linear-gradient(90deg, rgba(253,200,48,1) 0%, rgba(243,115,53,1) 100%);
      opacity: 0.8;
      color: white;

      padding-top: 40px;
      padding-left: 10px;
      padding-right: 10px;
      height: 100vh;
      box-sizing: border-box;

      @include mobile {
        height: 90vh;
      }

      .left-body {
        margin: 0 auto;
        width: 40rem;
        @include mobile {
          width: 100%;
        }
      }

      h1 {
        font-size: 3.6rem;
        @include mobile {
          font-size: 2rem;
        }
      }

      p{
        width: 100%;
        font-size: 2.4rem;
        @include mobile {
          font-size: 2rem;
        }
      }

      .left-birthday {
        position: absolute;
        bottom: 0;
        right: -96px;
        z-index: 10;
        width: auto;
        height: 40vh;

        @include tablet {
          height: auto;
          width: 70vw;
          right: 0;
        }

        @include mobile {
          height: auto;
          width: 80vw;
          right: 0;
        }
      }

      .left-cloud{
        position: absolute;
        height: 100%;
        width: 20rem;
        top: 0;
        right: -60px;

        @include tablet {
          display: none;
        }

        @include mobile {
          display: none;
        }
      }
    }

    .singup-right {
      padding-top: 40px;
      z-index: 20;
      padding-left: 10px;
      padding-right: 10px;
      
      @include tablet {
        padding-bottom: 30px;
      }

      @include mobile {
        padding-bottom: 30px;
      }

      .right-title {
        text-align: center;
        margin-bottom: 20px;

        h1 {
          font-size: 4rem;
          text-align: center;
          margin: 5px 0;
        } 

        p {
          font-size: 2rem;
          margin: 0;
        }
      }

      p {
        font-size: 2rem;
      }

      form {
        width: 410px;
        margin: 0 auto;
        
        @include mobile {
          width: 100%;
        }

        .form-element {
          margin-bottom: 20px;
          label {
            text-align: left !important;
            font-size: 1.6rem;
            font-weight: 500;
          }
        }

        .btn-signup {
          display: inline-block;
          text-decoration: none;
          border: none;
          width: 100%;
          height: 50px;

          font-weight: bold;
          border-radius: 32px;
          background-color: #F47B2A;
          color: white;
          cursor: pointer;
          font-size: 1.8rem;

          &:hover {
            background-color: #eb640b;
          }
        }
      }
    } 
  }
</style>

<route lang="yaml">
  name: Signup
  meta:
    layout: blank
</route>