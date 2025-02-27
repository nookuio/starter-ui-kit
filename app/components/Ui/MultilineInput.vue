<script setup lang="ts">
interface Props {
  autoResize?: boolean;
  disabled?: boolean;
  placeholder?: string;
}

const props = withDefaults(defineProps<Props>(), {
  autoResize: true,
});

const value = defineModel<string>('value');

const emit = defineEmits<{ blur: [value: string]; input: [value: string] }>();
</script>

<template>
  <div
    class="text-sm border border-neutral-200 rounded-md outline-hidden min-h-8 bg-zinc-50 border-solid text-neutral-900 flex items-center gap-x-1 overflow-auto flex-col dark:bg-neutral-900 dark:text-neutral-100 dark:border-solid dark:border dark:border-neutral-800 focus-within:border-neutral-400 dark:focus-within:border-neutral-700"
    :class="
      props.disabled ? 'opacity-70 pointer-events-none cursor-not-allowed' : ''
    "
  >
    <textarea
      class="text-sm outline-hidden text-neutral-900 w-full bg-transparent p-1.5 min-h-full placeholder:text-neutral-400 dark:text-neutral-100"
      :placeholder="props.placeholder"
      v-model="value"
      spellcheck="false"
      :class="props?.autoResize ? 'resize-none field-sizing-content' : ''"
      @blur="emit('blur', $event?.target?.value)"
    ></textarea>
  </div>
</template>
