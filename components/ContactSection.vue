<template>
  <div class="flex flex-col md:flex-row">
    <div class="w-full md:w-2/5 h-96 md:h-auto">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462563.0384040421!2d54.89714777194525!3d25.075656889992725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20Emirados%20%C3%81rabes%20Unidos!5e0!3m2!1spt-BR!2sbr!4v1725316956580!5m2!1spt-BR!2sbr"
        style="border: 0"
        allowfullscreen="true"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="w-full h-full"
      >
      </iframe>
    </div>

    <div class="flex flex-col w-full flex-grow">
      <div class="bg-zinc-300 h-32 flex justify-center items-center py-32">
        <div class="flex flex-col gap-2">
          <h2 class="font-bold text-3xl">Assine nossa newsletter</h2>
          <form class="flex flex-row gap-2">
            <Input placeholder="Seu melhor e-mail" class="p-2" />
            <button
              class="text-xl bg-gradient-to-l from-blue-600 to-purple-600 px-6 rounded-full py-1 text-white"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      <div class="flex flex-col md:flex-row h-full">
        <div class="p-8 w-2/3 flex-shrink-0 items-center justify-center mx-auto">
          <h2 class="text-3xl font-bold pb-8">Fale conosco</h2>
          <form @submit="false" class="flex flex-col gap-2">
            <FormField v-slot="{ componentField }" name="username">
              <FormItem>
                <FormLabel>Seu nome</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Nome completo"
                    v-bind="componentField"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="username">
              <FormItem>
                <FormLabel>Seu e-mail</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Seu melhor e-mail"
                    v-bind="componentField"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="username">
              <FormItem>
                <FormLabel>WhatsApp</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="WhatsApp com DDD"
                    v-bind="componentField"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <div class="flex items-center pt-4">
              <button
                type="submit"
                class="text-xl bg-gradient-to-l from-blue-600 to-purple-600 px-6 rounded-full py-2 text-white"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div class="h-full bg-gradient-to-l from-blue-600 to-purple-600 w-full">
          <div class="flex flex-col gap-4 p-8 text-white">
            <h2 class="text-3xl font-bold">Contato</h2>
            <div class="flex flex-row gap-2 items-center">
              <Icon name="hugeicons:location-09" class="h-8 w-8 shrink-0" />
              <p>
                R. José Kasper, 551 - Lot Antares - Arroio do Meio - RS,
                95940-0000
              </p>
            </div>
            <div class="flex flex-row gap-2 items-center">
              <Icon name="ic:baseline-whatsapp" class="h-8 w-8 shrink-0" />
              <p>
                +55 51 3716-1299
              </p>
            </div>
            <div class="flex flex-row gap-2 items-center">
              <Icon name="lets-icons:e-mail" class="h-8 w-8 shrink-0" />
              <p>
                contato@contato.com.br
              </p>
            </div>
            <div class="flex flex-row gap-2 items-center">
              <Icon name="ic:baseline-facebook" class="h-8 w-8 shrink-0" />
              <Icon name="mdi:twitter" class="h-8 w-8 shrink-0" />
              <Icon name="mdi:linkedin" class="h-8 w-8 shrink-0" />
              <Icon name="mdi:vimeo" class="h-8 w-8 shrink-0" />

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>