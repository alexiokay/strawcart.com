<template lang="pug">
div(style="display: flex, flex-direction: column " class="flex flex-col justify-center items-center ")
    <Navbar/>
    div#contact-mini(class=" hidden xl:flex xl:flex-col mt-5 xl:fixed xl:top-[79vh] xl:left-[2%] z-20 ")
      IconPhone( class=" w-9 h-9 text-blue-600 hover:cursor-pointer")
      IconEmail(@click="sendEmail" class="  w-9 h-9 text-blue-600 hover:cursor-pointer ")
      a(href="https://www.facebook.com/profile.php?id=100088083068376")
        IconFb( class="w-9 h-9 text-blue-600 hover:cursor-pointer")
    div#footer-wrapper(class=" w-full h-full flex flex-col items-center justify-between lg:justify-center mx-0 bg-white") 
        div(class="flex flex-col justify-between items-center w-full h-full  px-3  xl:px-5 xl:w-[84.6rem] ")
            <slot />
            Footer(class="mt-12")
    
<div class="square-wrapper">
  <div class="square"></div>
</div>
</template>

<script setup lang="ts">
import IconFb from "~icons/ic/baseline-facebook";
import IconPhone from "~icons/ic/baseline-phone";
import IconEmail from "~icons/material-symbols/alternate-email";
import { onBeforeMount } from "vue";
const router = useRouter();

const sendEmail = () => {
  document.location = "mailto:graphicdesigner@gmail.com";
};

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const square = entry.target.querySelector(".square") as HTMLElement;

      if (entry.isIntersecting) {
        square.classList.add("square-animation");
        return; // if we added the class, exit the function
      }

      // We're not intersecting, so remove the class!
      square.classList.remove("square-animation");
    });
  });

  // Tell the observer which elements to track
  observer.observe(document.querySelector(".square-wrapper") as HTMLElement);
});
</script>

<style lang="sass">

*
    scroll-snap-type: y mandatory

body
    overflow-x: hidden


.app-container

    z-index: 10
    display: flex
    flex-direction: column
    justify-content: center




.panel
    margin-top: 60px
    text-align: center
    margin: 0 auto
    scroll-snap-align: center

    width: 90%
    p.title

        font-style: normal
        font-size: 5vh
        line-height: 0%
        align-self: center
        letter-spacing: 0.18em

.square
    width: 200px
    height: 200px
    background: orange



@media (prefers-reduced-motion: no-preference)
    .square-animation
        animation: wipe-enter 1s 1

@keyframes wipe-enter
    0%
        transform: scale(0, .025)

    50%
        transform: scale(1, .025)
</style>
