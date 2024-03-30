<script setup>
import { ref, inject } from 'vue';
let images = inject('images')
let orderAmount = inject('orderAmount')
let product = inject('product')
let cart = inject('cart')
const slider = ref(0)

const nextSlide = () => {
    slider.value = (slider.value + 1) % images.length
}

const prevSlide = () => {
    slider.value = (slider.value - 1 + images.length) % images.length
}

const checkUnderZero = () => {
    orderAmount.value--
    if (orderAmount.value <= 0) {
        orderAmount.value = 0
    }
}

const addToCart = (product) => {
    const existingProduct = cart.value.find((p) => p.name === product.name)
    if (existingProduct) {
        existingProduct.quantity++
    } else {
        cart.value.push({ ...product, quantity: 1 })
    }
}
</script>
<template>
    <section class="flex flex-cols min-w-[375px] w-screen select-none">
        <div class="flex flex-col">
            <div class="relative">
                <div class="absolute top-[170px] end-5">
                    <button @click="nextSlide"
                        class="bg-white rounded-full w-[50px] h-[50px] flex items-center justify-center hover:scale-110"><svg
                            width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                            <path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" />
                        </svg></button>
                </div>
                <div class="absolute top-[170px] start-5">
                    <button @click="prevSlide"
                        class="bg-white rounded-full w-[50px] h-[50px] flex items-center justify-center hover:scale-110"><svg
                            width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" />
                        </svg></button>
                </div>
            </div>
            <div class="flex">
                <div v-for="(image, index) in images" :key="index">
                    <img class="min-w-[375px] w-screen max-h-[450px] object-cover object-center" :src="image.src"
                        :alt="image.alt" v-if="index === slider">
                </div>
            </div>
            <div class="flex flex-col items-start justify-center min-w-[375px] w-screen py-10 px-5">
                <div class=" mx-auto">
                    <h1 class="text-orange uppercase text-sm font-semibold tracking-wider mb-4">Sneaker Company</h1>
                    <h2 class="font-bold text-3xl mb-6">{{ product[0].name }}</h2>
                    <p class="w-[300px] mb-8">These low-profile sneakers are your perfect casual wear companion. Featuring a
                        durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                    <div class="flex justify-between items-center gap-3 mb-5">
                        <div class="flex gap-10">
                            <p class="text-3xl font-bold">${{ product[0].price }}.00</p>
                            <p class="text-orange bg-p-orange font-bold text-lg px-2 rounded-md">50%</p>
                        </div>
                        <div>
                            <p class="text-v-d-blue opacity-50 line-through text-lg  ">$250.00</p>
                        </div>
                    </div>
                    <div class="flex gap-4 bg-l-g-blue py-2 px-3 justify-between rounded-lg mb-5 h-[50px]">
                        <button class="w-5 flex items-center justify-center hover:scale-150" @click="checkUnderZero"><img
                                src="../assets/images/icon-minus.svg" alt="minus"></button>
                        <p class="mx-4 font-semibold w-3 mt-1">{{ orderAmount }}</p>
                        <button class="w-5 flex items-center  justify-center hover:scale-150" @click="orderAmount++"><img
                                src="../assets/images/icon-plus.svg" alt="plus"></button>
                    </div>
                    <div
                        class="flex justify-center gap-3 bg-orange rounded-lg hover:scale-110 hover:bg-opacity-80 h-[50px]">
                        <button class="flex items-center justify-center" @click="addToCart(product[0])"><svg width="22"
                                height="20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                                    fill="white" fill-rule="nonzero" />
                            </svg>
                            <p class="font-semibold text-white">Add to cart</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
