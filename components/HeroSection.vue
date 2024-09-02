<template>
  <div class="min-h-screen relative z-0 flex">
    <div class="absolute inset-0 -z-10">
      <NuxtImg src="/hero-section-bg.png" class="h-full object-cover" />
    </div>

    <div class="flex flex-col items-center justify-center gap-4 text-center m-auto max-w-xl text-white">
      <h1 class="text-4xl font-bold ">
        {{ $t("heroSection.title") }}
      </h1>
      <p class="text-lg">
        {{ $t("heroSection.description") }}
      </p>
      <button class="text-xl bg-gradient-to-l from-blue-600 to-purple-600 px-6 rounded-full py-2">
          {{ $t("heroSection.button") }}
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
