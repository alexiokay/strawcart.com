<template lang="pug">
div.album-cover-image(class=`squared overflow-hidden`  :style="{ backgroundImage: `url(${img})` }" @mouseenter="changeToImage(img2? img2: img, $event)" @mouseleave="changeToImage(img, $event)")
    div(class="absolute top-4 right-4 w-[6rem] h-auto space-y-3 flex flex-col items-end justify-center text-sm")
        div(v-if="new" class="  w-[4.7rem] h-4 bg-green-600 text-white flex items-center justify-center text-sm")
                p( class="mb-[1px]") NOWOŚĆ
        div(v-if="bestseller" class="   w-[6rem] h-4 bg-blue-600 text-white flex items-center justify-center text-sm")
                p( class="mb-[1px]") BESTSELLER
    div(class="group w-full h-full flex absolute bottom-0 flex-row justify-end items-end space-x-2 p-1")
       
        button.item-button1(class=" group-hover:animate-showUp  animate-hideDown  flex text-gray-600  h-10 w-10 bg-transparent border-[1px] border-gray-600  items-center justify-center") 
            IconHeart(class=" ")
        button.item-button2(class=" group-hover:animate-showUp flex h-10 w-10 bg-gray-600 hover:bg-black  items-center justify-center") 
            IconCart(class="text-white")
</template>

<script setup lang="ts">
import IconCart from "~icons/ph/shopping-cart-simple-fill";
import IconHeart from "~icons/ph/heart-fill";

const props = defineProps({
  img: {
    type: String,
    required: true,
  },
  img2: {
    type: String,
    required: false,
  },
  bestseller: {
    type: Boolean,
    required: false,
  },
  new: {
    type: Boolean,
    required: false,
  },
});

const changeToImage = (imga: String, event: any) => {
  event.target.style.backgroundImage = `url(${imga})`;
};
</script>

<style lang="sass">
.item-button1:hover
    -webkit-transition: color 0.2s
    -webkit-transition: border-color 0.2s
    transition:  border-color 0.2s
    transition: color 0.2s
    color: black
    border-color: black


.item-button2:hover
    -webkit-transition: background-color 0.2s
    transition:  background-color 0.2s

.item-button1
    animation: hideDown 0.2s forwards
    bottom: -50px
.item-button2
    animation: hideDown 0.2s forwards
    bottom: -50px



.squared
    position: relative
    width: 24%
    height: 0
    padding-bottom: 24%
    background-size: cover


@keyframes hideDown
    0%
        transform: translateY(0px)
    100%
        transform: translateY(50px)
</style>
