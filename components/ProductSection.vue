<template>
    <div class="relative z-0 min-h-screen flex py-24">
        <div class="inset-0 absolute -z-10">
            <NuxtImg src="/product-bg.png" class="h-full object-cover" />
        </div>
        <div class="w-full max-w-5xl m-auto flex flex-col-reverse md:flex-row">
            <div class="flex flex-col gap-5 text-white w-3/5 mx-auto ">
                <h2 class="text-4xl font-bold">{{ $t('productSection.title') }}</h2>
                <p class="text-lg">{{ $t('productSection.description') }}</p>
                <div class="flex flex-col md:flex-row gap-2">
                    <button class="bg-white text-purple-700 rounded-full px-6 py-2 font-bold">
                        {{ $t('productSection.buttons.technicalData') }}
                    </button>
                    <button class="bg-white text-purple-700 rounded-full px-6 py-2 font-bold">
                        {{ $t('productSection.buttons.securityData') }}
                    </button>
                </div>
            </div>
            <div>
                <NuxtImg src="/f200-produto.png" alt="" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts"></script>