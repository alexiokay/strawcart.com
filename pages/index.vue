<template lang="pug">
div(class=" w-full h-full bg-transparent flex flex-col mt-[0.35rem] px-4 ")
  <!-- HEADER -->
  div(class="flex w-full justify-around items-center h-[28rem] mt-16")
    div(class="flex w-2/5 flex-col")
      h1(class="text-[40px] leading-[138%] font-itim font-inter") {{$t('components.strawcart_showcase.title')}}
      h2(class="leading-[173%] tracking-[2%] text-[20px] mt-8") {{$t('components.strawcart_showcase.description')}}
      div(class="flex w-full justify-end space-x-12  items-center mt-12")
        p {{$t('components.strawcart_showcase.pricing')}}
        button(class="bg-[#CE3030] tracking-[12%] text-2xl drop-shadow-[0.2rem_0.3rem_0.2rem_rgba(0,0,0,0.5)] text-white rounded-lg w-32 font-itim min-h-[3rem]" ) {{$t('components.strawcart_showcase.button')}}
    div(class="block relative h-full w-max rounded-xl ")
      img(class=" w-max object-contain drop-shadow-xl rounded-xl border-2   border-[#DADADA]  h-full" src="/images/strawcart-model.jpg")
      img(class="absolute top-0 right-[-65px] w-[10rem] h-[8rem]" src="/images/1-year-warranty.png")
  <!-- ADVANTAGES -->
 

  div.advantage-wrapper1
    Advantages(:item1="income_producitivity" :item2="peak_experience" :item3="framework")
  div.advantage-wrapper2
    Advantages(:item1="customization" :item2="support" :item3="sustainability")

  hr(class=" w-full border-[0.8px] mt-16 mb-8 ")
  <!-- hr(class=" w-full border-[0.8px] mt-16 mb-16") -->
  div(class="w-full flex flex-col items-center justify-center space-y-10 mt-16 mb-16")
      h4(class="mb-3 text-4xl") {{$t('components.video.title')}}
      VideoPlayer(class="w-full md:w-5/5 h-[40rem] rounded-xl overflow-hidden")
  <!-- VIDEO  -->

 

  


  ProductOverwiew(:h1="$t('components.product_overwiew.straw_box.h1')" :h2="$t('components.product_overwiew.straw_box.h2')" :p1="$t('components.product_overwiew.straw_box.p1')" :p2="$t('components.product_overwiew.straw_box.p2')" img="/images/products/strawbox.png" :reversed="false" )

  ProductOverwiew(:h1="$t('components.product_overwiew.straw_tote.h1')" :h2="$t('components.product_overwiew.straw_box.h2')" :p1="$t('components.product_overwiew.straw_tote.p1')" :p2="$t('components.product_overwiew.straw_tote.p2')" img="/images/products/strawtote2.png" :reversed="true" )
  ProductOverwiew(:h1="$t('components.product_overwiew.straw_warehouse.h1')" :h2="$t('components.product_overwiew.straw_warehouse.h2')" :p1="$t('components.product_overwiew.straw_warehouse.p1')" :p2="$t('components.product_overwiew.straw_warehouse.p2')" :p3="$t('components.product_overwiew.straw_warehouse.p3')" img="/images/products/strawWarehouse.png" )
  ProductOverwiew(:h1="$t('components.product_overwiew.straw_shop.h1')" :h2="$t('components.product_overwiew.straw_shop.h2')" :p1="$t('components.product_overwiew.straw_shop.p1')" img="/images/products/strawShop.png" :reversed="true" )

  div.cooming-soon(class="relative flex flex-col mt-16 ")
    div(class=" h-[8rem] md:h-[12rem] z-20 flex font-itim flex-col items-center justify-center space-y-4  bg-[#292929] -rotate-6 text-white")
      p(class="text-3xl md:text-5xl") Cooming Soon
      p(class=" text-2xl md:text-4xl") Or choose -> Vertical Hydroponics Farm
    div.shop-container(class="h-[20rem] md:h-[30rem] w-[20rem] absolute top-[-2rem]  flex items-center justify-center z-10 mb-16")
      button(class="w-[10rem] h-[4rem] font-itim text-3xl text-white rounded-xl bg-[#7957FF] drop-shadow-lg") Shop

    Social

  Contact(class="mt-24")
  FAQ2(class="mt-48")
  
</template>

<script setup lang="ts">
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { ulotki } from "../libs/sliders";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
const { t } = useLang();

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
const income_producitivity = computed(() => {
  return {
    title: t("components.advantages.income_productivity.title"),
    description: t("components.advantages.income_productivity.description"),
    image: "/images/advantages/104.png",
  };
});

const customization = computed(() => {
  return {
    title: t("components.advantages.customization.title"),
    description: t("components.advantages.customization.description"),
    image: "/images/advantages/customization.jpg",
  };
});

const framework = computed(() => {
  return {
    title: t("components.advantages.framework.title"),
    description: t("components.advantages.framework.description"),
    image: "/images/advantages/120.png",
  };
});

const peak_experience = computed(() => {
  return {
    image: "/images/advantages/appreciation.png",
    title: t("components.advantages.peak_experience.title"),
    description: t("components.advantages.peak_experience.description"),
  };
});

const support = computed(() => {
  return {
    image: "/images/advantages/support.png",
    title: t("components.advantages.support.title"),
    description: t("components.advantages.support.description"),
  };
});

const sustainability = computed(() => {
  return {
    image: "/images/advantages/sustainable.jpg",
    title: t("components.advantages.sustainability.title"),
    description: t("components.advantages.sustainability.description"),
  };
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

onMounted(() => {
  const advantages = document.querySelectorAll(
    ".advantage"
  ) as NodeListOf<HTMLElement>;
  const products = document.querySelectorAll(
    ".product"
  ) as NodeListOf<HTMLElement>;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("advantage-animation");
          if (entry.target.querySelector(".product .order-0"))
            entry.target.classList.add("product-animation-left");
          if (entry.target.querySelector(".product .order-1"))
            entry.target.classList.add("product-animation-right");
          return; // if we added the class, exit the function
        } else {
          return;
        }

        // We're not intersecting, so remove the class!
      });
    },
    {
      threshold: 1,
    }
  );

  // Tell the observer which elements to track

  advantages.forEach((advantage: HTMLElement) => {
    observer.observe(advantage);
  });
  products.forEach((product: HTMLElement) => {
    observer.observe(product);
  });
});
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
