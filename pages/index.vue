<template lang="pug">
div(class=" w-full h-full bg-transparent flex flex-col mt-[0.35rem] px-4 ")
  <!-- HEADER -->
  div(class="flex w-full justify-around items-center h-[28rem] mt-16")
    div(class="flex w-2/5 flex-col")
      h1(class="text-[40px] leading-[138%] font-itim font-inter") Improove your strawberry farm with StrawCart
      h2(class="leading-[173%] tracking-[2%] text-[20px] mt-8") This idea comes from Switzerland and Brings checked system to your plantation. Made to maximize income, renome and employee’s morale :) Transform your business into local Hegemon.
      div(class="flex w-full justify-end space-x-12  items-center mt-12")
        p BUY 770$ /  RENT 60$
        button(class="bg-[#CE3030] tracking-[12%] text-2xl drop-shadow-[0.2rem_0.3rem_0.2rem_rgba(0,0,0,0.5)] text-white rounded-lg w-32 font-itim h-12" ) GET NOW
    div(class="block relative h-full w-max rounded-xl ")
      img(class=" w-max object-contain drop-shadow-xl rounded-xl border-2   border-[#DADADA]  h-full" src="/images/strawcart-model.jpg")
      img(class="absolute top-0 right-[-65px] w-[10rem] h-[8rem]" src="/images/1-year-warranty.png")
  <!-- ADVANTAGES -->
 

  div.advantage-wrapper1
    Advantages(:item1="income_producitivity" :item2="faster_funnier" :item3="framework")
  div.advantage-wrapper2
    Advantages(:item1="item2" :item2="support" :item3="item6")

  <!-- hr(class=" w-full border-[0.8px] mt-16 mb-16") -->
  div(class="w-full flex tems-center justify-center mt-16 mb-16")
   
      VideoPlayer(class="w-full md:w-5/5 h-[40rem] rounded-xl overflow-hidden")
  <!-- VIDEO  -->

 

  


  ProductOverwiew(h1="Carton boxes for strawberries" h2="FINAL PRODUCT BOX, READY FOR SALE!" p1="Gives your product prestige felling. Perfect if you wish to increase income of your business." p2="500 gram capacity + streaching folia gratis for orders above 300." img="/images/products/strawbox.png" :reversed="false" )

  ProductOverwiew(h1="Foldable & space saving Totes" h2="INCLUDES SPACE FOR 8 PIECES OF STRAWBOX" p1="+ Designed to save space in your warehouse," p2="+ Includes space for 8 strawboxes" img="/images/products/strawtote2.png" :reversed="true" )
  ProductOverwiew(h1="Mobile Field Warehouse" h2="A BUFFER FOR YOUR PRODUCT!" p1="Intended for temporary storage up to 6 pallets until the arrival of the transport to enter the cold store." p2="+ Protects strawberries from strong sun," p3="+ Gives your’s employees a protection from bad weahter." img="/images/products/strawWarehouse.png" )
  ProductOverwiew(h1="Sell wherever you want" h2="Sell prestige with StrawShop across the world!" p1="Go with original strawcart.com signboard or choose your own. Foldable 2x2 m2 sizes." img="/images/products/strawShop.png" :reversed="true" )

  div.cooming-soon(class="relative flex flex-col mt-16 ")
    div(class=" h-[8rem] md:h-[12rem] z-20 flex font-itim flex-col items-center justify-center space-y-4  bg-[#292929] -rotate-6 text-white")
      p(class="text-3xl md:text-5xl") Cooming Soon
      p(class=" text-2xl md:text-4xl") Or choose -> Vertical Hydroponics Farm
    div.shop-container(class="h-[20rem] md:h-[30rem] w-[20rem] absolute top-[-2rem]  flex items-center justify-center z-10 mb-16")
      button(class="w-[10rem] h-[4rem] font-itim text-3xl text-white rounded-xl bg-[#7957FF] drop-shadow-lg") Shop

    Social
</template>

<script setup lang="ts">
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { ulotki } from "../libs/sliders";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

type Advantage = {
  title: string;
  description: string;
  image: string;
};

const settings = ref({
  itemsToShow: 1,
  snapAlign: "center",
  slideWidth: "100%",
  autoplay: 5000,
  transition: 1000,
  wrapAround: true,
});

const income_producitivity = {
  title: "Increases income and productivity",
  description:
    "Thanks to our products you can increase your income by 20% and productivity by 30%",
  image: "/images/advantages/104.png",
};

const item2 = {
  title: "Customization",
  description: "customize height, shelf & parts to your needs",
  image: "/images/advantages/customization.jpg",
};
const framework = {
  title: "Proven value framework",
  description: "Our products are tested and trusted by our clients",
  image: "/images/advantages/120.png",
};

const faster_funnier = {
  image: "/images/advantages/appreciation.png",
  title: "Peak Experience",
  description: "Increases employee’s morale & your's renoma",
};
const support = {
  image: "/images/advantages/support.png",
  title: "Customer Service",
  description: "Get help from our support team in 24h",
};
const item6 = {
  image: "/images/advantages/sustainable.jpg",
  title: "Sustainability",
  description:
    "Even strawcart Pro is charged by solar panels, so you don't need to care about electricity",
};

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


.cooming-soon
  width: 110vw
  position: relative
  left: 45%
  right: 50%
  margin-left: -50vw
  margin-right: -50vw

.full-width
  width: 100vw
  position: relative
  left: 50%
  right: 50%
  margin-left: -50vw
  margin-right: -50vw

.shop-container
  width: 100vw
  position: relative
  left: 50%
  right: 50%
  margin-left: -50vw
  margin-right: -50vw
  background-image: url("/images/shop-background.png")
  background-size: contain
  background-repeat: repeat

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
