<template lang="pug">
div(class=" w-full h-full bg-transparent flex flex-col mt-[0.35rem] px-4 ")
  <!-- HEADER -->
  div(class="flex w-full justify-around items-center h-[28rem] mt-16")
    div(class="flex w-2/5 flex-col")
      h1(class="text-[40px] leading-[138%] font-itim font-inter") Improove your strawberry farm with StrawCart
      h2(class="leading-[173%] tracking-[2%] text-[20px] mt-8") This idea comes from Switzerland and Brings checked system to your plantation. Made to maximize income, renome and employee’s morale :)
      div(class="flex w-full justify-end space-x-12  items-center mt-12")
        p BUY 770$ /  RENT 60$
        button(class="bg-[#CE3030] tracking-[12%] text-2xl drop-shadow-[0.2rem_0.3rem_0.2rem_rgba(0,0,0,0.5)] text-white rounded-lg w-32 font-itim h-12" ) GET NOW
    div(class="block relative h-full w-max rounded-xl ")
      img(class=" w-max object-contain drop-shadow-xl rounded-xl border-2   border-[#DADADA]  h-full" src="/images/strawcart-model.jpg")
      img(class="absolute top-0 right-[-65px] w-[10rem] h-[8rem]" src="/images/1-year-warranty.png")
  <!-- ADVANTAGES -->
  div(class="flex h-full w-full justify-between items-center mt-12")
    div(class=" w-1/5  flex flex-col" )
      img(class="" src="/images/advantages/customization.jpg")
     
    div(class=" w-1/5  flex flex-col" )
      img(class="" src="/images/advantages/sustainable.jpg")
      
     
    div(class=" w-1/5  flex flex-col items-start" )
      img(class="" src="/images/advantages/fast-delivery.webp")
     
  <!-- ADVANTAGES - TEXT -->
  div(class=" w-full justify-between flex flex-row " )
       
    div(class=" w-1/5  flex flex-col space-y-4" )
      
      h3(class="text-4xl  mt-2 font-intern") Sustainable Energy
      h4 Choose solar panels as sustainable charging method
      
    div(class=" w-1/5  flex flex-col space-y-4" )
      
      h3(class="text-4xl  mt-2 font-intern") Sustainable Energy
      h4 Choose solar panels as sustainable charging method
     
    div(class=" w-1/5  flex flex-col items-start space-y-4" )
      
      h3(class="text-4xl  mt-2 font-intern") Fast delivery
      h4 Quick design and delivery
      
  hr(class=" w-full border-[0.8px] mt-16 mb-16")
  div(class="w-full flex tems-center justify-center")
   
      VideoPlayer(class="w-full md:w-4/5 h-[32rem]")
  <!-- VIDEO  -->

  <!-- ADVANTAGES  -->

  div(class="w-full flex bg-[#292929] items-start justify-centser h-96 p-4 mt-24")
    div(class="bg-[#656565]  h-16 w-full ")
      h3(class="text-white text-center w-full h-full text-2xl font-semibold flex items-center justify-center") Improove your process with us
      div(class="flex w-full")
        img(src="/images" class="")
        img(src="" class="")
        img(src="" class="")
        img(src="" class="")
        img(src="" class="")

  div
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
