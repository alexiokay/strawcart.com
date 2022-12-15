<template lang="pug">
div#products-overwiew(class="w-full flex flex-col items-center justify-around mt-20")
    div.product(class="w-full flex flex-col md:flex-row justify-around items-center")
      img(:src="img" class="object-cover w-3/4 md:w-1/2 order-0 md:order-1 " :class="reversed ? 'order1' : 'order2'")
      div(class="flex flex-col text-center md:text-start w-full md:w-2/5 mt-10 " )
        h4(class="font-itim  text-4xl md:text-4xl") {{h1}} 
        div(class="space-y-4  mt-12 md:mt-16 ")
          p(class=" text-xl")  {{h2}} 
          p {{p1}} 
          p {{p2}} 
      
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

<style lang="css">
@media (min-width: 768px) {
  .order1 {
    order: 1;
  }
}

@media (min-width: 768px) {
  .order2 {
    order: 0;
  }
}
</style>
