<script setup>
import Popup from "./Popup.vue";
import { ref, inject } from "vue";
let orderAmount = inject("orderAmount");
let cart = inject("cart");
const show = ref(false);
</script>

<template>
  <nav
    class="flex justify-between items-center w-[1440px] mx-auto px-20 py-6 border-b-4 border-l-g-blue select-none"
  >
    <div class="flex items-center gap-16">
      <img class="-mt-1" src="../assets/images/logo.svg" alt="Logo" />
      <ul class="flex gap-10">
        <li>
          <a href="#"
            ><p class="hover:scale-110 hover:font-medium">Collections</p></a
          >
        </li>
        <li>
          <a href="#"><p class="hover:scale-110 hover:font-medium">Men</p></a>
        </li>
        <li>
          <a href="#"><p class="hover:scale-110 hover:font-medium">Women</p></a>
        </li>
        <li>
          <a href="#"><p class="hover:scale-110 hover:font-medium">About</p></a>
        </li>
        <li>
          <a href="#"
            ><p class="hover:scale-110 hover:font-medium">Contact</p></a
          >
        </li>
      </ul>
    </div>
    <div class="flex items-center gap-10 relative">
      <div
        v-if="cart.length > 0"
        class="absolute -top-[2px] right-[75px] bg-orange w-[30px] text-sm font-bold text-white flex items-center justify-center rounded-3xl"
      >
        {{ orderAmount }}
      </div>
      <button @click="show = !show">
        <img
          class="hover:scale-110"
          src="../assets/images/icon-cart.svg"
          alt="Cart"
        />
      </button>
      <Popup v-if="show" class="absolute top-[55px] -right-[80px]" />
      <img
        class="w-12 cursor-pointer hover:scale-110 hover:border-2 hover:border-orange rounded-full"
        src="../assets/images/image-avatar.png"
        alt=""
      />
    </div>
  </nav>
</template>
<style scoped>
li {
  position: relative;
}

li::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -38px;
  height: 5px;
  background: orange;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s ease-in-out;
}

li:hover::after {
  transform: scaleX(1);
}
</style>
