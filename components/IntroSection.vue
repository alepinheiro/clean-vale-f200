<template>
<div class="py-24 relative z-0 ">
    <div class="inset-0 absolute -z-10">
            <NuxtImg src="/intro-bg.png" class="h-full object-cover" />
        </div>
        <div class="flex flex-col w-full max-w-5xl mx-auto gap-10">

            <h2 class="text-4xl font-bold text-center text-purple-700">
                {{ $t("introSection.title") }}
            </h2>
            <p class="text-lg text-center text-zinc-600 w-3/4 mx-auto">
                {{ $t("introSection.description") }}
            </p>
            <NuxtImg src="/intro-video.png" alt="" />

            <div class="flex flex-row gap-2">
                <div v-for="item of cards" :key="item.title" class="flex flex-col items-start gap-2">
                    <NuxtImg :src="item.icon" />
                    <h3 class="font-bold text-lg text-purple-700">{{ item.title }}</h3>
                    <p>{{ item.description }}</p>
                </div>
            </div>
        </div>
</div>
</template>
<script setup lang="ts">
const { t } = useI18n();
const cards = [
    {
        title: t("introSection.cards.rocket.title"),
        description: t("introSection.cards.rocket.description"),
        icon: "/rocket.png"
    },
    {
        title: t("introSection.cards.smartphone.title"),
        description: t("introSection.cards.smartphone.description"),
        icon: "/smartphone.png"
    },
    {
        title: t("introSection.cards.brush.title"),
        description: t("introSection.cards.brush.description"),
        icon: "/brush.png"
    },
]
</script>