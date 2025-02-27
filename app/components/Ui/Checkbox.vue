<script setup lang="ts">
interface Props {
  disabled?: boolean;
  label?: string;
  value?: boolean;
}

const props = defineProps<Props>();

const bindedValue = defineModel<boolean>('bindValue');

const emit = defineEmits<{ update: [boolean] }>();

function updateValue() {
  bindedValue.value = !bindedValue.value;

  emit('update', !props.value);
}
</script>

<template>
  <div
    class="flex items-center gap-x-1.5 gap-y-1.5 text-neutral-500 cursor-pointer dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 group"
    :class="{
      active: bindedValue || props.value,
      'pointer-events-none opacity-70': props.disabled,
    }"
    @click="updateValue()"
  >
    <span
      class="p-px checkbox group-[.active]:bg-neutral-800 group-[.active]:border-neutral-800 dark:group-[.active]:bg-white dark:group-[.active]:border-white"
      ><Icon v-if="bindedValue || props.value"
        class="text-white dark:text-black"
        name="mdi:check-bold"
    /></span>
    <span
      class="text-xs group-[.active]:text-neutral-800 dark:group-[.active]:text-neutral-100"
      v-if="props.label"
      >{{ props.label }}</span
    >
  </div>
</template>

<style scoped>
 @reference "~/assets/css/main.css";

.checkbox {
  @apply flex items-center justify-center min-w-3.5 min-h-3.5 max-w-3.5 max-h-3.5 border rounded border-neutral-300 dark:border-neutral-700 text-white group-hover:border-neutral-500 dark:group-hover:border-neutral-400/70;
}

.active {
  @apply text-neutral-800 dark:text-neutral-100;
}
</style>
