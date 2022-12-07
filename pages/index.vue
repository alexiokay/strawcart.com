<template lang="pug">
div(class=" w-full h-full bg-transparent flex flex-col mt-[0.35rem] px-4 ")
    carousel(:items-to-show="1.5" :settings="settings" class="relative")
        
        slide(v-for="slide in slides" :key="slide.title" class="relative")
     
            img(:src='slide.image' class='w-full')
        template(#addons class=" ")
            navigation(class="w-4 h-8")
            pagination(class=" absolute left-0 right-0 bottom-6 ml-auto mr-auto ")
   
    h1(class="w-full text-center text-4xl mt-6") PŁYTY
    hr(class="border-1 border-black w-full mt-6")
   
    LazySwiper(:slides="ulotki" class="w-full h-full")

    h1(class="w-full text-center text-4xl mt-6") ARTYSCI
    hr(class="border-1 border-black w-full mt-6")
    LazySwiper(:slides="ulotki" class="w-full h-full")
</template>

<script setup lang="ts">
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { ulotki } from "../libs/sliders";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const settings = ref({
  itemsToShow: 1,
  snapAlign: "center",
  slideWidth: "100%",
  autoplay: 5000,
  transition: 1000,
  wrapAround: true,
});

const slides = ref([
  {
    title: "Slide 1",
    image: "https://defjam.pl/img/imagecache/1300x500_pictures_baner_lp_88.png",
  },
  {
    title: "Slide 2",
    image:
      "https://defjam.pl/img/imagecache/1300x500_pictures_bbbbimage003.jpg",
  },
]);
</script>

<style lang="sass">
.carousel__prev
    box-sizing: content-box
    margin-left: 30px
    color: gray
    transform: scale(4) translate(0%, -12%)
    -webkit-transition: color 0.3s
    transition: color 0.3s

.carousel__next
    box-sizing: content-box
    margin-right: 30px
    color: gray
    transform: scale(4) translate(0%, -12%)
    -webkit-transition: color 0.3s
    transition: color 0.3s


.carousel__next:hover
    color: black




.carousel__pagination-button::after
    width: 10px
    height: 10px
    border-radius: 50%
    margin: 0 5px
    -webkit-transition: background-color 0.3s
    transition: background-color 0.3s
</style>
