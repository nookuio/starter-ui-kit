<script setup lang="ts">
interface Props {
  disabled?: boolean;
  icon?: string;
  placeholder?: string;
  size?: 'small' | 'medium' | 'large';
  type?: 'text' | 'number' | 'password' | 'email' | 'date';
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium',
  type: 'text',
});

const value = defineModel<string | number>('value');

const emit = defineEmits<{
  blur: [Event];
  input: [Event];
  keydown: [KeyboardEvent];
}>();

const passwordVisible = ref<boolean>(false);

const styles = computed(() => {
  switch (props.size) {
    case 'large': {
      return { height: '40px', fontSize: '16px' };
    }

    case 'medium': {
      return { height: '32px', fontSize: '14px' };
    }

    case 'small': {
      return { height: '25px', fontSize: '12px' };
    }
  }
});

const inputType = computed(() => {
  if (props?.type === 'password') {
    return passwordVisible?.value ? 'text' : 'password';
  }

  return props?.type;
});
</script>

<template>
  <div
    class="text-sm pl-2 pr-1.5 border border-neutral-200 rounded-md outline-none bg-zinc-50 border-solid text-neutral-900 flex items-center gap-x-1 dark:bg-neutral-900 dark:text-neutral-100 dark:border-solid dark:border dark:border-neutral-800 focus-within:border-neutral-400 dark:focus-within:border-neutral-700 has-[input:invalid]:border-red-500 dark:has-[input:invalid]:border-red-500"
    :class="
      props.disabled ? 'opacity-70 pointer-events-none cursor-not-allowed' : ''
    "
    :style="{ minHeight: styles?.height, height: styles?.height }"
  >
    <Icon
      class="text-neutral-400"
      v-if="props?.icon"
      :name="props?.icon"
      size="13"
    /><input
      class="outline-none text-neutral-900 bg-transparent min-h-full grow placeholder:text-neutral-400 dark:text-neutral-100"
      :type="inputType"
      :placeholder="props.placeholder"
      v-model="value"
      spellcheck="false"
      :style="{ fontSize: styles?.fontSize }"
      @keydown="emit('keydown', $event)"
      @input="emit('input', $event)"
      @blur="emit('blur', $event)"
    /><span
      class="flex items-center justify-center p-1 rounded cursor-pointer text-neutral-400 dark:hover:bg-neutral-800"
      v-if="props?.type === 'password' && value"
      @click="passwordVisible = !passwordVisible"
      ><Icon
        :name="passwordVisible ? 'heroicons:eye-slash' : 'heroicons:eye'"
        size="13"
    /></span>
  </div>
</template>
