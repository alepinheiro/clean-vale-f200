<template>
  <div class="min-h-screen relative z-0 flex flex-col py-24">
    <div class="flex flex-row flex-wrap gap-8 md:gap-5 max-w-5xl mx-auto px-5">
      <div
        v-for="item of cards"
        :key="item"
        class="flex flex-col items-center gap-2 md:w-1/4 flex-grow text-center"
      >
        <NuxtImg src="/shield.png" />
        <h2 class="font-bold text-lg">
          {{ $t("benefitsSection." + item + ".title") }}
        </h2>
        <p>
          {{ $t("benefitsSection." + item + ".description") }}
        </p>
      </div>
    </div>

    <div class="max-w-5xl mx-auto py-8 w-full">
      <Swiper
        :modules="[SwiperPagination, SwiperAutoplay]"
        :slidesPerView="3"
        :loop="true"
        :spaceBetween="20"
        :pagination="
            {
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }
        "
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
      >
        <SwiperSlide>
          <NuxtImg
            class="h-96 w-full object-cover rounded-xl"
            src="/slider-1.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg
            class="h-96 w-full object-cover rounded-xl"
            src="/slider-2.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg
            class="h-96 w-full object-cover rounded-xl"
            src="/slider-1.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg
            class="h-96 w-full object-cover rounded-xl"
            src="/slider-2.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtImg
            class="h-96 w-full object-cover rounded-xl"
            src="/slider-1.png"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
const cards = ["item1", "item2", "item3", "item4", "item5", "item6"];
</script>
