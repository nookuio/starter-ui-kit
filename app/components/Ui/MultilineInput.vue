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

const textareaRef = ref();

function adjustTextareaHeight() {
  if (props.autoResize && textareaRef.value) {
    textareaRef.value.style.height = 'auto';

    textareaRef.value.style.height = `${textareaRef.value.scrollHeight}px`;
  }
}

watch(value, () => {
  nextTick(adjustTextareaHeight);
});

onMounted(() => {
  adjustTextareaHeight();
});
</script>

<template>
  <div
    class="text-sm border-[1px] border-neutral-200 rounded-[6px] outline-none min-h-8 bg-zinc-50 border-solid text-neutral-900 flex items-center gap-x-1 dark:bg-neutral-900 dark:text-neutral-100 dark:border-solid dark:border-[1px] dark:border-neutral-800 focus-within:border-neutral-400 dark:focus-within:border-neutral-700 overflow-auto"
    :class="
      props.disabled ? 'opacity-70 pointer-events-none cursor-not-allowed' : ''
    "
  >
    <textarea
      class="text-sm outline-none text-neutral-900 w-full bg-transparent p-1.5 placeholder:text-neutral-400 dark:text-neutral-100"
      :placeholder="props.placeholder"
      v-model="value"
      spellcheck="false"
      ref="textareaRef"
      :class="props?.autoResize ? 'resize-none' : ''"
      @blur="emit('blur', $event?.target?.value)"
    ></textarea>
  </div>
</template>
