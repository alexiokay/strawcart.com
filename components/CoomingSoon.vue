<template lang="pug">
div.cooming-soon(class="relative flex flex-col mt-16 ")
    div(class=" h-[8rem] md:h-[12rem] z-20 flex font-itim flex-col items-center justify-center space-y-4  bg-[#292929] -rotate-6 text-white")
      p(class="text-3xl md:text-5xl") {{$t('components.cooming_soon.title')}}
      p(class=" text-2xl md:text-4xl") {{$t('components.cooming_soon.subtitle')}} 
    div.shop-container(class="h-[20rem] md:h-[30rem] w-[20rem] absolute top-[-2rem]  flex items-center justify-center z-10 ")
      button(class="w-[10rem] h-[4rem] font-itim text-3xl text-white rounded-xl bg-[#7957FF] drop-shadow-lg") Shop

</template>

<script setup lang="ts">
const { t } = useLang();
</script>

<style lang="sass">
.cooming-soon
  width: 110vw
  position: relative
  left: 45%
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
</style>
