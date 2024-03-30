<script setup>
import { ref, inject } from "vue";
let open = inject("open");
let images = inject("images");
const slider = ref(0);

const nextSlide = () => {
    slider.value = (slider.value + 1) % images.length;
};

const prevSlide = () => {
    slider.value = (slider.value - 1 + images.length) % images.length;
};

const close = () => {
    open.value = false;
};
</script>

<template>
    <div class="bg-black bg-opacity-70 w-screen h-screen flex flex-col items-center justify-center">
        <div class="-right-[265px] relative mb-5">
            <button @click="close" class="hover:scale-150">
                <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                        fill="white" fill-rule="evenodd" />
                </svg>
            </button>
        </div>
        <div class="slider flex flex-col justify-center items-center">
            <div class="relative">
                <button @click="nextSlide"
                    class="absolute z-50 translate-x-[250px] translate-y-[240px] bg-white rounded-full w-[50px] h-[50px] flex items-center justify-center hover:scale-110">
                    <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                        <path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" />
                    </svg>
                </button>
                <button @click="prevSlide"
                    class="absolute z-50 -translate-x-[300px] translate-y-[240px] bg-white rounded-full w-[50px] h-[50px] flex items-center justify-center hover:scale-110">
                    <img src="../assets/images/icon-previous.svg" alt="previous" />
                </button>
            </div>
            <div class="flex mb-10 relative w-[550px]">
                <div v-for="(image, index) in images" :key="index">
                    <img class="w-[550px] rounded-lg abs" :src="image.src" :alt="image.alt" v-if="index === slider" />
                </div>
            </div>

            <div class="flex gap-8">
                <button @click="slider = 0">
                    <img class="rounded-lg w-[100px] hover:scale-110 hover:opacity-50 hover:border-2 hover:border-orange"
                        src="../assets/images/image-product-1-thumbnail.jpg" alt="1-thumbnail" />
                </button>
                <button @click="slider = 1">
                    <img class="rounded-lg w-[100px] hover:scale-110 hover:opacity-50 hover:border-2 hover:border-orange"
                        src="../assets/images/image-product-2-thumbnail.jpg" alt="2-thumbnail" />
                </button>
                <button @click="slider = 2">
                    <img class="rounded-lg w-[100px] hover:scale-110 hover:opacity-50 hover:border-2 hover:border-orange"
                        src="../assets/images/image-product-3-thumbnail.jpg" alt="3-thumbnail" />
                </button>
                <button @click="slider = 3">
                    <img class="rounded-lg w-[100px] hover:scale-110 hover:opacity-50 hover:border-2 hover:border-orange"
                        src="../assets/images/image-product-4-thumbnail.jpg" alt="4-thumbnail" />
                </button>
            </div>
        </div>
    </div>
</template>
