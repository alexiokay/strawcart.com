<template lang="pug">

div#mobile-menu(v-if="mobileMenu === true" class="fixed top-0 left-0 md:hidden flex flex-col items-center  w-full h-screen bg-black opacity-95 z-50  ")
  div(class="flex w-[80%] h-[7rem] justify-end items-center ")
    button(@click="mobileMenu = false" class="text-white text-4xl") X
  div#mobile-menu-content(class="flex w-full h-full text-2xl text-white flex-col justify-start items-center")
    NuxtLink(@click="mobileMenu = false" class="navbar-text    hover:text-blue-700 mt-12" to="/") STRONA GLOWNA
    NuxtLink(@click="mobileMenu = false" class="navbar-text  hover:text-blue-700 mt-8 " to="/about") O MNIE
    NuxtLink(@click="mobileMenu = false" class="navbar-text  hover:text-blue-700 mt-8 " to="/portfolio") PORTFOLIO
    NuxtLink(@click="mobileMenu = false" class="navbar-text  hover:text-blue-700 mt-8 " to="/pricing") CENNIK
    NuxtLink(@click="mobileMenu = false" class="navbar-text  hover:text-blue-700 mt-8 " to="/contact" ) KONTAKT
div#navbar-wrapper(class=" w-full text-gray-500 h-full flex flex-col items-center justify-between lg:justify-center mx-0 bg-white") 

  div(class="flex justify-between w-full h-9 text-xs px-3  xl:px-5 xl:w-[84.6rem] ")
    div(class="flex justify-start w-1/2 mt-[0.4rem] space-x-3")
      div(class='flex space-x-1')
        EmailIcon(class="w-4 h-4")
        p.navbar-text(class="hover:cursor-pointer hover:text-gray-800")  biuro@strawcart.com 
      p.navbar-text(class="hover:cursor-pointer hover:text-gray-800")  {{$t('components.navbar.contact').toUpperCase()}}
    div(class="flex justify-end w-1/2 mt-[0.4rem] space-x-3")
      p.navbar-text(class="hover:cursor-pointer hover:text-gray-800") {{$t('components.navbar.login').toUpperCase()}}
      p |
      p.navbar-text(class="hover:cursor-pointer hover:text-gray-800") {{$t('components.navbar.register').toUpperCase()}}
      p |
      p.navbar-text(class="hover:cursor-pointer hover:text-gray-800")  {{$t('components.navbar.safe').toUpperCase()}} (0)
      <LanguageSwitcher />
  hr(class="border-1 border-gray-100 w-full")
  div#navbar-content1(class="flex items-center justify-between w-full h-[4.9rem] text-xs px-3  xl:px-1 xl:w-[82rem] ")
    NuxtLink(class=" " to="/")
      img#logo(class="h-[4.9rem] " src='/images/strawcart.webp')
    
    div(class='flex w-[13.3rem] h-[3.1rem] border-[1.2px] mb-2 p-[0.5rem] space-x-2 border-gray-200 items-center justify-center  ')
      div(class="w-12 h-12 flex items-center justify-center")
        IconCart(class="w-full h-full text-gray-500")
        p(class="absolute top-[4rem]  text-white") 0
      p (0.00ZŁ)
      IconDown(class="text-gray-500 w-5 h-5")
      button(class='h-full w-[8rem]  text-center bg-gray-500 text-white')  {{$t('components.navbar.cart').toUpperCase()}} 
    
  div#navbar-content2(class="  lg:w-[76%] w-[66%] h-full flex items-center justify-end md:justify-around mx-0 tracking-wider text-black font-brown  font-normal ")
    
     
      button#mobile-menu-button(@click="mobileMenu = !MobileMenu" class="block md:hidden") Menu
    
  hr(class="border-[0.1px] border-gray-200  w-full")

  div#navbar-content3(class=" relative w-full   px-3  text-base xl:px-5 xl:w-[82rem] h-16 flex items-center justify-end md:justify-around mx-0 tracking-wider text-black  ")
    NavbarDropdown#dropdown(@click="openDropdown" class="dropdown-hidden hidden hover:flex absolute top-12 left-0 z-50")
    NuxtLink(class="navbar-text  hidden md:block  hover:text-gray-400  " to="/configurator") {{$t('pages.configurator.nav').toUpperCase()}}
    NuxtLink(class="navbar-text  hidden md:block  hover:text-gray-400  " to="/shop") {{$t('pages.shop.nav').toUpperCase()}}
    NuxtLink(@click="openDropdown()" class="navbar-text  hidden md:block  hover:text-gray-400  " to="/") SERVICES
      
    NuxtLink(@click="toContact" class="navbar-text  hidden md:block hover:text-gray-400  " to="/") CONTACT

    
  hr(class="border-[0.1px] border-gray-200 w-full")
  div#navbar-content2(v-if="route.name!== 'index'" class=" w-full h-12 text-xs px-3  xl:px-5 xl:w-[82rem]  space-x-2 flex items-end justify-start  mx-0 tracking-wider text-gray-500 font-normal ")
    IconHouse
    p(class="font-extra") >> {{route.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}}
   

  
</template>

<script lang="ts" setup>
import IconHouse from "~icons/fa-solid/home";
import IconCart from "~icons/ph/shopping-cart-simple-fill";
import IconDown from "~icons/material-symbols/expand-circle-down-rounded";
import EmailIcon from "~icons/mi/email";
import { onMounted } from "vue";
const route = useRoute();
const router = useRouter();
const locale = useState<string>("locale.setting");
const { t } = useLang();

let mobileMenu = ref(false);

const scrollToAbout = () => {
  const about = document.getElementById("navbar");
  about?.scrollIntoView({ behavior: "smooth" });
};

const scrollToContact = () => {
  const contact = document?.getElementById("contact");
  contact?.scrollIntoView({ behavior: "auto" });
  contact?.classList.add("shake");
};

const openDropdown = () => {
  document.getElementById("dropdown")?.classList.toggle("dropdown-visible");
};

const toContact = () => {
  router.push({ name: "index" });
  setTimeout(() => {
    scrollToContact();
  }, 100);
};
</script>

<style lang="sass">

.navbar-text
  -webkit-transition: color 0.3s
  transition: color 0.3s
  cursor: pointer


#navbar


    a:hover
      cursor: pointer
      color: green

.shake
  animation-name: shake
  animation-duration: 2s


@keyframes shake
  0%
    transform: translate(1px, 1px) rotate(0deg)
  10%
    transform: translate(-1px, -2px) rotate(-1deg)
  20%
    transform: translate(-3px, 0px) rotate(1deg)
  30%
    transform: translate(3px, 2px) rotate(0deg)
  40%
    transform: translate(1px, -1px) rotate(1deg)
  50%
    transform: translate(-1px, 2px) rotate(-1deg)
  60%
    transform: translate(-3px, 1px) rotate(0deg)
  70%
    transform: translate(3px, 1px) rotate(-1deg)
  80%
    transform: translate(-1px, -1px) rotate(1deg)
  90%
    transform: translate(1px, 2px) rotate(0deg)
  100%
    transform: translate(1px, -2px) rotate(-1deg)

.dropdown-hidden
  display: none

.dropdown-visible
  display: flex

@keyframes dropdown
  0%
    transform: translateY(-25rem)
  100%
    transform: translateY(0rem)
</style>
