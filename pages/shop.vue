<template lang="pug">
button(@click="addToCart") addToCart
button(@click="cartStore.clearCart") clearCart
</template>

<script setup lang="ts">
import { useCartStore } from "../stores/Cart";
import uniqid from "uniqid";

let cartStore: any = ref(useCartStore());

if (process.client) {
  cartStore.value = useCartStore();
}

const addToCart = () => {
  if (process.client) cartStore.value.addToCart(getRandomItem());
};

const getRandomItem = () => {
  const exampleItem = {
    id: uniqid(),
    title: "Koszulka",
    price: 100,
    quantity: 1,
    image: "https://picsum.photos/200",
  };

  return exampleItem;
};
</script>

<style lang="sass"></style>
