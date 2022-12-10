<template lang="pug">
div.advantage-wrapper(class="flex h-full w-full justify-between items-start mt-12")

    div.advantage(class=" w-1/5  flex flex-col" )
        img(class="h-[12rem] object-cover " :src="props.item1.image")
        div(class=" flex flex-col items-start space-y-4" )
            h3(class="text-3xl  mt-2 font-intern") {{props.item1.title}}
            h4 {{props.item1.description}}
        
    div.advantage(class=" w-1/5  flex flex-col" )
        img(class="h-[12rem] object-cover " :src="props.item2.image" )
        div(class=" flex flex-col items-start space-y-4" )
            h3(class="text-3xl  mt-2 font-intern") {{props.item2.title}}
            h4 {{props.item2.description}}
        
        
    div.advantage(class=" w-1/5  flex flex-col items-start" )
        img(class="h-[12rem] object-cover " :src="props.item3.image")
        div(class=" flex flex-col items-start space-y-4" )
            h3(class="text-3xl  mt-2 font-intern") {{props.item3.title}}
            h4 {{props.item3.description}}
        

</template>

<script setup lang="ts">
export interface Advantage {
  title: string;
  description: string;
  image: string;
}

interface Props {
  item1: Advantage;
  item2: Advantage;
  item3: Advantage;
}

const props = defineProps<Props>();
</script>

<style lang="sass"></style>
