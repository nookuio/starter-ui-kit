<script setup lang="ts">
interface Props {
  disabled?: boolean;
  label?: string;
  leftIcon?: string;
  loading?: boolean;
  rightIcon?: string;
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
}

const props = withDefaults(defineProps<Props>(), {
  label: 'Button',
  size: 'medium',
  type: 'button',
  variant: 'primary',
});

const emit = defineEmits<{ click: [MouseEvent] }>();

const styles = computed(() => {
  switch (props.size) {
    case 'small': {
      return { height: '25px', fontSize: '12px' };
    }

    case 'medium': {
      return { height: '32px', fontSize: '14px' };
    }

    case 'large': {
      return { height: '40px', fontSize: '16px' };
    }
  }
});
</script>

<template>
  <button
    class="bg-neutral-950 rounded-md font-medium pl-4 pr-4 text-white transition-colors flex items-center gap-x-1 justify-center outline-none hover:bg-neutral-800 disabled:opacity-70 disabled:pointer-events-none dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
    v-if="props?.variant === 'primary'"
    :style="{
      fontSize: styles?.fontSize,
      minHeight: styles?.height,
      height: styles?.height,
    }"
    :disabled="props.disabled"
    :class="{ 'pointer-events-none opacity-70': props.loading }"
    :type="props.type"
    test="true"
    @click="emit('click', $event)"
  >
    <slot v-if="props?.loading" name="loading"
      ><Icon class="min-w-4 min-h-4" name="eos-icons:loading" size="15" /></slot
    ><slot v-else
      ><Icon
        class="min-w-3.5 min-h-3.5"
        v-if="props.leftIcon"
        :name="props.leftIcon"
        size="13" /><span>{{ props.label }}</span
      ><Icon
        class="min-w-3.5 min-h-3.5"
        v-if="props?.rightIcon"
        :name="props?.rightIcon"
        size="13"
    /></slot>
  </button>
  <button
    class="bg-neutral-100 rounded-md font-medium pl-4 pr-4 text-neutral-900 transition-colors flex items-center gap-x-1 justify-center outline-none hover:bg-neutral-200 disabled:opacity-70 disabled:pointer-events-none dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-900"
    v-else-if="props?.variant === 'secondary'"
    :style="{
      fontSize: styles?.fontSize,
      minHeight: styles?.height,
      height: styles?.height,
    }"
    :disabled="props.disabled"
    :class="{ 'pointer-events-none opacity-70': props.loading }"
    :type="props.type"
    test="true"
    @click="emit('click', $event)"
  >
    <slot v-if="props?.loading" name="loading"
      ><Icon class="min-w-4 min-h-4" name="eos-icons:loading" size="15" /></slot
    ><slot v-else
      ><Icon
        class="min-w-3.5 min-h-3.5"
        v-if="props.leftIcon"
        :name="props.leftIcon"
        size="13" /><span>{{ props.label }}</span
      ><Icon
        class="min-w-3.5 min-h-3.5"
        v-if="props?.rightIcon"
        :name="props?.rightIcon"
        size="13"
    /></slot>
  </button>
  <button
    class="bg-white rounded-md font-medium pl-4 pr-4 text-neutral-900 transition-colors flex items-center gap-x-1 justify-center border border-neutral-200 outline-none hover:bg-neutral-100 disabled:opacity-70 disabled:pointer-events-none dark:text-white dark:border-neutral-800 dark:bg-transparent dark:hover:bg-neutral-800"
    v-else-if="props?.variant === 'outline'"
    :style="{
      fontSize: styles?.fontSize,
      minHeight: styles?.height,
      height: styles?.height,
    }"
    :disabled="props.disabled"
    :class="{ 'pointer-events-none opacity-70': props.loading }"
    :type="props.type"
    test="true"
    @click="emit('click', $event)"
  >
    <slot v-if="props?.loading" name="loading"
      ><Icon class="min-w-4 min-h-4" name="eos-icons:loading" size="15" /></slot
    ><slot v-else
      ><Icon
        class="min-w-3.5 min-h-3.5"
        v-if="props.leftIcon"
        :name="props.leftIcon"
        size="13" /><span>{{ props.label }}</span
      ><Icon
        class="min-w-3.5 min-h-3.5"
        v-if="props?.rightIcon"
        :name="props?.rightIcon"
        size="13"
    /></slot>
  </button>
</template>
