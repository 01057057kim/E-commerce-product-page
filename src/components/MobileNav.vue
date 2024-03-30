<script setup>
import Popup from "./Popup.vue";
import { ref, inject } from "vue";
let orderAmount = inject("orderAmount");
let cart = inject("cart");
const show = ref(false);
let Navshow = ref(false);
</script>

<template>
  <nav
    class="flex items-center justify-between px-10 py-6 border-b-4 border-l-g-blue select-none min-w-[375px] w-screen mx-auto"
  >
    <div class="flex items-center justify-start gap-5">
      <button @click="Navshow = !Navshow">
        <img
          class="hover:scale-110"
          src="../assets/images/icon-menu.svg"
          alt="hamburger"
        />
      </button>
      <img class="w-40" src="../assets/images/logo.svg" alt="Logo" />
    </div>
    <div class="flex items-center gap-2">
      <div
        v-if="cart.length > 0"
        class="absolute top-[10px] bg-orange w-[30px] text-sm font-bold text-white flex items-center justify-center rounded-3xl"
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
      <div class="absolute inset-0 flex items-center justify-center top-60">
        <Popup v-if="show" />
      </div>

      <img
        class="w-8 cursor-pointer hover:scale-110 hover:border-2 hover:border-orange rounded-full"
        src="../assets/images/image-avatar.png"
        alt="avatar"
      />
    </div>
    <div
      v-if="Navshow"
      class="w-screen h-screen left-0 top-0 absolute bg-black bg-opacity-60 z-35"
    ></div>
    <div
      v-if="Navshow"
      class="absolute w-[250px] h-screen bg-white flex flex-cols top-0 left-0 justify-center z-55"
    >
      <div>
        <button @click="Navshow = false">
          <img
            class="w-[25px] mt-6 hover:scale-110"
            src="../assets/images/icon-close.svg"
            alt="close"
          />
        </button>
        <ul class="flex flex-col gap-8 mt-14 w-[200px] font-bold text-xl">
          <li>
            <a href="#">
              <p class="hover:scale-110">Collections</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p class="hover:scale-110">Men</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p class="hover:scale-110">Women</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p class="hover:scale-110">About</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p class="hover:scale-110">Contact</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
