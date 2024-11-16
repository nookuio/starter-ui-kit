<script setup lang="ts">
import type { NuxtError } from '#app';

interface Props {
  error: NuxtError;
}

const props = withDefaults(defineProps<Props>(), {
  error: {
    statusCode: 500,
    message: 'Something went wrong.',
  },
});
</script>

<template>
  <div
    class="flex items-center justify-center bg-white text-neutral-900 p-2.5 h-screen text-sm dark:bg-neutral-950 dark:text-zinc-50"
  >
    <div class="p-8 text-center">
      <span class="text-blue-500 font-medium text-base">{{
        props.error?.statusCode || '500'
      }}</span>
      <h1 class="text-4xl font-bold mb-10 mt-5 max-md:text-[28px]">
        {{ props.error?.message || 'Something went wrong.' }}
      </h1>
      <div
        class="flex justify-center gap-x-3 gap-y-3 max-sm:flex-col max-sm:items-stretch"
      >
        <NuxtLink to="/"
          ><UiButton label="Go to homepage" left-icon="heroicons:home"
        /></NuxtLink>
      </div>
    </div>
  </div>
</template>
