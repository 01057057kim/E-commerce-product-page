<script setup>
import { ref, provide } from "vue";
import Nav from "./components/Nav.vue";
import MobileNav from "./components/MobileNav.vue";
import Content from "./components/Content.vue";
import MobileContent from "./components/MobileContent.vue";
import ImageView from "./components/ImageView.vue";
let orderAmount = ref(0);
provide("orderAmount", orderAmount);
let product = ref([
  {
    name: "Fall Limited Edition Sneakers",
    price: 125.0,
    image: "../assets/images/image-product-1-thumbnail.jpg",
  },
]);
provide("product", product);
let cart = ref([]);
provide("cart", cart);
let open = ref(false);
provide("open", open);
import image1 from "./assets/images/image-product-1.jpg";
import image2 from "./assets/images/image-product-2.jpg";
import image3 from "./assets/images/image-product-3.jpg";
import image4 from "./assets/images/image-product-4.jpg";
let images = [
  {
    src: image1,
    alt: "Image 1",
  },
  {
    src: image2,
    alt: "Image 2",
  },
  {
    src: image3,
    alt: "Image 3",
  },
  {
    src: image4,
    alt: "Image 4",
  },
];
provide("images", images);
</script>

<template>
  <main class="m-0 p-0 box-border min-w-[1440px] w-full mx-auto h-screen text-[16px] font-kumbh-sans">
    <ImageView v-if="open" class="absolute w-[1440px] left-0 z-20" />
    <Nav />
    <Content />
  </main>
</template>
