<script setup lang="ts">
  import type { HTMLAttributes } from 'vue';
  import { useVModel } from '@vueuse/core';
  import { cn } from '@/lib/utils';

  const props = defineProps<{
    defaultValue?: string | number;
    modelValue?: string | number | File;
    class?: HTMLAttributes['class'];
  }>();

  const emits = defineEmits<{
    (e: 'update:modelValue', payload: typeof props.modelValue): void;
  }>();

  const modelValue = useVModel(props, 'modelValue', emits, {
    passive: true,
    defaultValue: props.defaultValue,
  });
</script>

<template>
  <input
    v-model="modelValue"
    :class="
      cn(
        'flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white ' +
          ' file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500' +
          ' focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-100 focus-visible:ring-offset-1' +
          ' disabled:cursor-not-allowed disabled:opacity-50' +
          ' transition ease-in-out' +
          ' file:regularActiveText' +
          ' dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-primary-900',
        props.class,
      )
    " />
</template>
