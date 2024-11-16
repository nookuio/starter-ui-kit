<script setup lang="ts">
interface Props {
  disabled?: boolean;
  value?: boolean;
}

const props = defineProps<Props>();

const bindValue = defineModel<any>('bindValue');

const emit = defineEmits<{ change: [boolean] }>();

const computedVal = computed({
  get: () => {
    return bindValue?.value !== undefined ? bindValue?.value : props?.value;
  },
  set: (value) => {
    if (bindValue?.value !== undefined) {
      bindValue.value = value;
    } else {
      emit('change', value);
    }
  },
});
</script>

<template>
  <div
    class="text-sm border-[1px] border-[#E5E5E540] rounded-[999px] outline-none min-h-6 bg-neutral-200 border-solid text-neutral-500 cursor-pointer flex items-center p-px w-[45px] dark:bg-neutral-900 dark:text-neutral-400 dark:border-solid dark:border-[1px] dark:border-neutral-800"
    :class="[
      computedVal ? 'enabled' : '',
      props.disabled ? 'opacity-70 pointer-events-none cursor-not-allowed' : '',
    ]"
  >
    <div
      class="flex items-center w-full relative h-5"
      @click="computedVal = !computedVal"
    >
      <div
        class="rounded-[999px] absolute bg-white transition-all shadow-neutral-400 border-solid border-[1px] border-neutral-100 top-0 bottom-0 w-5 shadow-[0px_2px_5px_-1px] dark:bg-neutral-800 dark:shadow-neutral-950 dark:border-solid dark:border-[#40404030] dark:border-[1px]"
        :style="{ left: computedVal ? 'calc(100% - 20px)' : '0' }"
        :class="computedVal ? 'enabled-switch' : ''"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.enabled {
  @apply bg-neutral-900 dark:bg-neutral-100 !important;
}

.enabled-switch {
  @apply shadow-neutral-950 dark:shadow-neutral-100 !important;
}
</style>
