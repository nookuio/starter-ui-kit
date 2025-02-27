<script setup lang="ts">
interface Props {
  disabled?: boolean;
}

const props = defineProps<Props>();

const value = defineModel<boolean>('value');
</script>

<template>
  <div
    class="text-sm border border-[#E5E5E540] rounded-[999px] outline-none min-h-6 bg-neutral-200 border-solid text-neutral-500 cursor-pointer flex items-center p-px w-[45px] dark:bg-neutral-900 dark:text-neutral-400 dark:border-solid dark:border dark:border-neutral-800"
    :class="[
      value ? 'enabled' : '',
      props.disabled ? 'opacity-70 pointer-events-none cursor-not-allowed' : '',
    ]"
  >
    <div class="flex items-center w-full relative h-5" @click="value = !value">
      <div
        class="rounded-[999px] absolute bg-white transition-all shadow-neutral-400 border-solid border border-neutral-100 top-0 bottom-0 w-5 shadow-[0px_2px_5px_-1px] dark:bg-neutral-800 dark:shadow-neutral-950 dark:border-solid dark:border-[#40404030] dark:border"
        :style="{ left: value ? 'calc(100% - 20px)' : '0' }"
        :class="value ? 'enabled-switch' : ''"
      ></div>
    </div>
  </div>
</template>

<style scoped>
 @reference "~/assets/css/main.css";
.enabled {
  @apply bg-neutral-900! dark:bg-neutral-100!;
}

.enabled-switch {
  @apply shadow-neutral-950! dark:shadow-neutral-100!;
}
</style>
