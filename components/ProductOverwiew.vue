<template lang="pug">
div#products-overwiew(class="w-full flex flex-col items-center justify-around mt-20")
    div.product(class="w-full flex flex-row justify-around items-center")
      div(class="flex flex-col w-2/5 mt-10 " :class="reversed ? 'order-1' : 'order-0'")
        h4(class="font-itim text-4xl") {{h1}} 
        div(class="space-y-4 mt-16 ")
          p(class=" text-xl")  {{h2}} 
          p {{p1}} 
          p {{p2}} 
      img(:src="img" )
</template>

<script setup lang="ts">
defineProps({
  h1: {
    type: String,
    required: true,
  },
  h2: {
    type: String,
    required: true,
  },
  p1: {
    type: String,
    required: true,
  },
  p2: {
    type: String,
    required: false,
  },
  p3: {
    type: String,
    required: false,
  },
  img: {
    type: String,
    required: true,
  },
  reversed: {
    type: Boolean,
    required: false,
  },
});
</script>

<style lang="sass"></style>
