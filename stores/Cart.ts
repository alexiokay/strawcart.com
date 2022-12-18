import { defineStore } from "pinia";
import Cookies from "js-cookie";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";
import uniqid from "uniqid";
import { useStorage } from "@vueuse/core";

const pinia = createPinia();
pinia.use(piniaPersist);

export type CartItem = {
  id: any;
  title: string;
  price: number;
  quantity: number;
  image: string;
};

export const useCartStore = defineStore("cart", {
  state: () => {
    return {
      // all these properties will have their type inferred automatically

      cart: useStorage("cart", [
        {
          id: uniqid(),
          title: "Koszulka",
          price: 100,
          quantity: 1,
          image: "https://picsum.photos/200",
        },
      ] as Array<CartItem>),
    };
  },
  getters: {
    getCart(state) {
      return state.cart;
    },
    getCartTotal(state) {
      return state.cart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },
    getCartLength(state) {
      return state.cart.length;
    },
  },
  actions: {
    addToCart(item: CartItem) {
      this.cart.push(item);
    },
    removeFromCart(_item: any) {
      console.log(_item);
      this.cart = this.cart.filter((item) => {
        return item.id != _item;
      });
      console.log(this.cart);
    },

    increaseItemQuantity(id: any) {
      const item = this.cart.find((item) => item.id === id);
      if (item) {
        item.quantity++;
      }
    },

    clearCart() {
      this.cart = [];
    },
  },

  persist: {
    enabled: true,
  },
});

export default pinia;
