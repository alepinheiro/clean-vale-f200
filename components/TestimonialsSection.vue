<template>
  <section class="min-h-screen">
    <div class="flex flex-col md:flex-row max-w-5xl mx-auto items-center gap-10">
        <NuxtImg src="/testimonials-chef.png" class=" h-96 md:h-full object-cover" />

      <div class="w-full md:w-2/3 overflow-hidden px-5">
        <h1 class="text-4xl font-bold text-purple-700">
          {{ $t("testimonialsSection.title") }}
        </h1>
        <div class="w-full my-12">
          <Swiper
            :modules="[SwiperPagination, SwiperAutoplay]"
            :slidesPerView="2"
            :loop="true"
            :spaceBetween="20"
            :pagination="{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }"
            :autoplay="{
              delay: 8000,
              disableOnInteraction: true,
            }"
          >
            <SwiperSlide>
              <div
                class="p-4 border border-zinc-300 bg-white rounded-xl w-full flex flex-col gap-4"
              >
                <div class="flex flex-row gap-2">
                  <div class="h-10 w-10 rounded-full bg-zinc-300"></div>
                  <div>
                    <p class="font-bold">
                      {{ $t("testimonialsSection.testimonials.item1.name") }}
                    </p>
                    {{ $t("testimonialsSection.testimonials.item1.job") }}
                  </div>
                </div>
                <div>
                    {{ $t("testimonialsSection.testimonials.item1.testimonial") }}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                class="p-4 border border-zinc-300 bg-white rounded-xl w-full flex flex-col gap-4"
              >
                <div class="flex flex-row gap-2">
                  <div class="h-10 w-10 rounded-full bg-zinc-300"></div>
                  <div>
                    <p class="font-bold">
                      {{ $t("testimonialsSection.testimonials.item1.name") }}
                    </p>
                    {{ $t("testimonialsSection.testimonials.item1.job") }}
                  </div>
                </div>
                <div>
                    {{ $t("testimonialsSection.testimonials.item1.testimonial") }}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                class="p-4 border border-zinc-300 bg-white rounded-xl w-full flex flex-col gap-4"
              >
                <div class="flex flex-row gap-2">
                  <div class="h-10 w-10 rounded-full bg-zinc-300"></div>
                  <div>
                    <p class="font-bold">
                      {{ $t("testimonialsSection.testimonials.item1.name") }}
                    </p>
                    {{ $t("testimonialsSection.testimonials.item1.job") }}
                  </div>
                </div>
                <div>
                    {{ $t("testimonialsSection.testimonials.item1.testimonial") }}
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts"></script>
