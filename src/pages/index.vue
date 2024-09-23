<script lang="ts" setup>
// import confetti from 'canvas-confetti';


// const count: number = 500;
// const defaults: { origin: { y: number } } = {
//   origin: { y: 0.9 },
// };

// function fire(particleRatio: number, opts: object): void {
//   confetti({
//     ...defaults,
//     ...opts,
//     particleCount: Math.floor(count * particleRatio),
//   });
// }

// fire(0.25, {
//   spread: 26,
//   startVelocity: 55,
// });
// fire(0.2, {
//   spread: 60,
// });
// fire(0.35, {
//   spread: 100,
//   decay: 0.91,
//   scalar: 0.8,
// });
// fire(0.1, {
//   spread: 120,
//   startVelocity: 25,
//   decay: 0.92,
//   scalar: 1.2,
// });
// fire(0.1, {
//   spread: 120,
//   startVelocity: 45,
// });



import confetti from 'canvas-confetti';
const defaults = { startVelocity: 20, spread: 360, ticks: 100, zIndex: 9999 };

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}


const interval = setInterval(function() {
  const particleCount = 55; 
  
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.9), y: randomInRange(0.1, 0.9) }, 
    })
  );
}, 2500); 



// window.onscroll = function() {
//     myFunction();
// };

// function myFunction() {
//     const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//     const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     const scrolled = (winScroll / height) * 100;

//     const myBar = document.getElementById("mybar");
//     if (myBar) {
//         myBar.style.width = scrolled + "%";
//     }

//     if (myBar) {
//         myBar.style.width = scrolled + "%";

//         triggerConfetti(myBar);
//     }
// }
// function triggerConfetti(element: HTMLElement) {
//     const rect = element.getBoundingClientRect();
//     console.log("Triggering confetti at", rect);

//     confetti({
//         particleCount: 20,
//         startVelocity: 50,
//         angle: 0,
//         zIndex: 99999,
//         spread: 20,
//         scalar: 0.8,

//         gravity: 0,
//         ticks: 30,
//         origin: {
//             x: (rect.left + rect.width - 20) / window.innerWidth,
//             y: (rect.top + rect.height / 20) / window.innerHeight
//         }
//     });
// }
</script>


<template>
    <!-- start header  -->
    <div class="main_header">
        <Header />
    </div>
    <!-- end header  -->
    <div class="wrapper">



        <!-- start scroll indicator-->
         <!-- <div class="scroll">
            <div class="scroll_bar" id="mybar"></div>
         </div> -->
        <!--end scroll indicator-->


        <!-- start mainbg  -->
        <div class="mainbackground">
            <img class="mainbackground_img" src="../assets/img/mainbackground.jpg" alt="">
        </div>
        <!-- end mainbg  -->
        <Maintitle/>
        <Countdown/>
        <Seeback/>
        <AdminCongrats1/>
        <!-- <AdminCongrats2/> -->
        <!-- <Supporter/> -->
        <Activities/>
        <Timeline/>
        <!-- <Footer/> -->
         
        <!--start backtop -->
        <BackTop/>
        <n-back-top :top="100" :left="100" />
        <!-- end backtop -->

        <!-- start side button -->
        <showQRbank/>
        <renewQRmodal/>
        <frameAvatar/>
        <!-- end side button -->

        <!-- Start frame image  -->
        <!-- end frame image  -->
        <Footer/>
    </div>

</template>
<style scoped lang="scss">

@import '@styles/_mixins.scss';
  *{
    width: 100%;
  }
    :deep(.n-back-top)  {
        --n-icon-color: #6ea3f1; 
    }
    .scroll{
        z-index: 999;
        // position: fixed;
        // margin-top: 60px;
        width: 100%;
        height: 4px;
        background: #f6f6f6;
        &_bar{
            height: 4px;
            background: linear-gradient(to right,  #6ea3f1,#6ea3f1);
            width: 0%;
        }
    }
    .mainbackground{
        // padding-top: 60px;
        object-fit: cover;
        &_img{
            width: 100%;
            height: 700px;
            @media (min-width: 1700px) {
              height: 1000px;
            }
        }

        @include mobile{
          height: 200px;
          &_img{
            height: 100%;
            width: 100%;
          }
        }
    }

</style>