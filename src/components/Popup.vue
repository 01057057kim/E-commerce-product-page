<script setup>
import { inject, computed } from "vue";

let orderAmount = inject("orderAmount");
let cart = inject("cart");

const calculateTotal = () => {
    return cart.value.map((item) => {
        return {
            ...item,
            total: item.price * orderAmount.value,
        };
    });
};

const deleteCartItem = (index) => {
    cart.value.splice(index, 1);
};

const total = computed(() => calculateTotal());
</script>

<template>
    <div
        class="min-w-[350px] min-h-[300px] md:min-w-[350px] md:min-h-[200px] h-auto border border-transparent mx-3 shadow-2xl rounded-lg bg-white absolute">
        <div class="border-b-4 border-l-g-blue px-4 py-4">
            <p>Cart</p>
        </div>
        <div v-if="cart.length === 0 || orderAmount === 0"
            class="flex flex-col justify-center items-center h-[240px] md:h-[160px]">
            <p>Your cart is empty.</p>
        </div>
        <div v-else class="px-4 py-10 flex flex-col justify-start items-center">
            <div class="w-full md:w-[310px]">
                <div v-for="(item, index) in total" :key="index" class="flex items-center">
                    <img class="w-[70px] md:w-[50px] rounded-lg" src="../assets/images/image-product-1-thumbnail.jpg" />
                    <div class="ml-3 w-[300px] md:w-[310px]">
                        <p>{{ item.name }}</p>
                        <p>
                            ${{ item.price }}.00 x {{ orderAmount }}
                            <span class="font-bold">${{ item.total }}.00</span>
                        </p>
                    </div>
                    <div class="flex items-center ml-3">
                        <button @click="deleteCartItem">
                            <img class="w-[20px]" src="../assets/images/icon-delete.svg" alt="trashcan" />
                        </button>
                    </div>
                </div>
                <div class="mt-5">
                    <button class="border bg-orange rounded-xl w-[100%] md:w-[310px] h-[50px] font-semibold text-white">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
