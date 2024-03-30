<script setup>
import { ref, inject } from "vue";
let images = inject("images");
let open = inject("open");
let orderAmount = inject("orderAmount");
let product = inject("product");
let cart = inject("cart");
const slider = ref(0);

const checkUnderZero = () => {
  orderAmount.value--;
  if (orderAmount.value <= 0) {
    orderAmount.value = 0;
  }
};

const addToCart = (product) => {
  const existingProduct = cart.value.find((p) => p.name === product.name);
  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.value.push({ ...product, quantity: 1 });
  }
};
</script>
<template>
  <section class="grid grid-cols-2 gap-32 py-10 w-[1440px] h-auto mx-auto select-none">
    <div class="col-span-1 row-span-1 flex flex-col">
      <div class="flex ml-32 mb-8">
        <div v-for="(image, index) in images" :key="index">
          <button @click="open = !open">
            <img class="rounded-xl hover:scale-105 w-[550px]" :src="image.src" :alt="image.alt" v-if="index === slider" />
          </button>
        </div>
      </div>
      <div class="flex flex-row gap-9 ml-32 w-[530px]">
        <button @click="slider = 0">
          <img class="rounded-xl hover:scale-110 hover:opacity-50 hover:border-2 hover:border-orange"
            src="../assets/images/image-product-1-thumbnail.jpg" alt="product-1-thumbnail" />
        </button>
        <button @click="slider = 1">
          <img class="rounded-xl hover:scale-110 hover:opacity-50 hover:border-2 hover:border-orange"
            src="../assets/images/image-product-2-thumbnail.jpg" alt="product-2-thumbnail" />
        </button>
        <button @click="slider = 2">
          <img class="rounded-xl hover:scale-110 hover:opacity-50 hover:border-2 hover:border-orange"
            src="../assets/images/image-product-3-thumbnail.jpg" alt="product-3-thumbnail" />
        </button>
        <button @click="slider = 3">
          <img class="rounded-xl hover:scale-110 hover:opacity-50 hover:border-2 hover:border-orange"
            src="../assets/images/image-product-4-thumbnail.jpg" alt="product-4-thumbnail" />
        </button>
      </div>
    </div>
    <div class="col-span-1 row-span-1 flex flex-col items-start justify-start w-[450px] py-10">
      <h1 class="text-orange uppercase text-xl font-semibold tracking-wider mb-4 mt-20">
        Sneaker Company
      </h1>
      <h2 class="font-bold text-5xl mb-10">{{ product[0].name }}</h2>
      <p class="w-[450px] mb-8">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div class="flex items-center gap-3">
        <p class="text-3xl font-bold">${{ product[0].price }}.00</p>
        <p class="text-orange bg-p-orange font-bold text-lg px-2 rounded-md">
          50%
        </p>
      </div>
      <p class="text-v-d-blue opacity-50 line-through text-lg mb-10">$250.00</p>
      <div class="flex justify-between gap-4">
        <div class="flex gap-4 bg-l-g-blue py-2 px-3 justify-between rounded-lg">
          <button class="w-5 flex items-center justify-center hover:scale-150" @click="checkUnderZero">
            <img src="../assets/images/icon-minus.svg" alt="minus" />
          </button>
          <p class="mx-4 font-semibold w-3">{{ orderAmount }}</p>
          <button class="w-5 flex items-center justify-center hover:scale-150" @click="orderAmount++">
            <img src="../assets/images/icon-plus.svg" alt="plus" />
          </button>
        </div>
        <div class="flex gap-3 bg-orange rounded-lg hover:scale-110 hover:bg-opacity-80">
          <button class="w-[295px] flex items-center justify-center" @click="addToCart(product[0])">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="white" fill-rule="nonzero" />
            </svg>
            <p class="font-semibold text-white">Add to cart</p>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
