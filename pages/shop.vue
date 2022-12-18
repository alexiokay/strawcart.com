<template lang="pug">
button(@click="addToCart") addToCart
</template>

<script setup lang="ts">
import { useCartStore } from "../stores/Cart";

let cartStore: any = ref(useCartStore());

if (process.client) {
  cartStore.value = useCartStore();
}

const addToCart = () => {
  if (process.client) cartStore.value.addToCart(exampleItem.value);
};
const exampleItem = ref({
  id: 2252,
  title: "Koszulka",
  price: 100,
  quantity: 1,
  image: "https://picsum.photos/200",
});
</script>

<style lang="sass"></style>
