<template lang="pug">
div(class="flex flex-row  items-start w-full")
        div(class="w-2/4 space-y-8")
            h3(class="text-6xl mt-4 underline") Frequently Asked Question
            p(class="text-lg") Have a question? We’re here to help.
        div(class="flex flex-col  items-center w-2/4")
            FAQElement(:isOpen="true" title=" Is there a free trial avalible?" description="Yes, Join the waiting list and try Strawcart for a week, when it’s avalible, without any cost" )
            hr(class=" w-full border-[0.8px] mt-4 mb-4 ")
            FAQElement(title=" What if my strawcart got broken?" description="Don’t worry, we created mini shop where you can get any additional parts like: tools, wheels, roof, screws etc." )
            hr(class=" w-full border-[0.8px] mt-4 mb-4 ")
            FAQElement(title="What’s inside the order?" description="sdds" )
            hr(class=" w-full border-[0.8px] mt-4 mb-4 ")
            FAQElement(title="How is it delivered?" description="You can choose between DHL & Fedex Services or your own transport." )
            hr(class=" w-full border-[0.8px] mt-4 mb-4 ")
            FAQElement( title="Why should I even try?" description="Strawcart if connected with our StrawFramework can make your business around 170% more efficient than your competitors." )
</template>

<script setup lang="ts"></script>

<style lang="sass"></style>
