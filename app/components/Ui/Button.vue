<script setup lang="ts">
interface Props {
  disabled?: boolean;
  label?: string;
  leftIcon?: string;
  loading?: boolean;
  rightIcon?: string;
  size?: 'small' | 'medium' | 'large';
  type?: 'primary' | 'secondary' | 'outline';
}

const props = withDefaults(defineProps<Props>(), {
  label: 'Button',
  size: 'medium',
  type: 'primary',
});

const emit = defineEmits<{ click: [MouseEvent] }>();

const buttonStyles = computed<any>(() => {
  switch (props.size) {
    case 'small':
      return {
        height: '25px',
        fontSize: '12px',
      };
    case 'medium':
      return {
        height: '32px',
        fontSize: '14px',
      };
    case 'large':
      return {
        height: '40px',
        fontSize: '16px',
      };
  }
});
</script>

<template>
  <button
    class="bg-neutral-950 rounded-[6px] font-medium pl-4 pr-4 text-white transition-colors flex items-center gap-x-1 justify-center outline-none hover:bg-neutral-800 disabled:opacity-[0.7] disabled:pointer-events-none dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
    :style="{
      fontSize: buttonStyles?.fontSize,
      minHeight: buttonStyles?.height,
    }"
    v-if="props?.type === 'primary'"
    :disabled="props.disabled"
    :class="{ 'pointer-events-none opacity-70': props.loading }"
    type="button"
    test="true"
    @click="emit('click', $event)"
  >
    <slot v-if="props?.loading" name="loading"
      ><Icon name="eos-icons:loading" size="15"
    /></slot>
    <slot v-else
      ><Icon v-if="props.leftIcon" :name="props.leftIcon" size="13" />
      <span>{{ props.label }}</span>
      <Icon v-if="props?.rightIcon" :name="props?.rightIcon" size="13"
    /></slot>
  </button>
  <button
    class="bg-neutral-100 rounded-[6px] font-medium pl-4 pr-4 text-neutral-900 transition-colors flex items-center gap-x-1 justify-center outline-none hover:bg-neutral-200 disabled:opacity-[0.7] disabled:pointer-events-none dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-900"
    :style="{
      fontSize: buttonStyles?.fontSize,
      minHeight: buttonStyles?.height,
    }"
    v-else-if="props?.type === 'secondary'"
    :disabled="props.disabled"
    :class="{ 'pointer-events-none opacity-70': props.loading }"
    type="button"
    test="true"
    @click="emit('click', $event)"
  >
    <slot v-if="props?.loading" name="loading"
      ><Icon name="eos-icons:loading" size="15"
    /></slot>
    <slot v-else
      ><Icon v-if="props.leftIcon" :name="props.leftIcon" size="13" />
      <span>{{ props.label }}</span>
      <Icon v-if="props?.rightIcon" :name="props?.rightIcon" size="13"
    /></slot>
  </button>
  <button
    class="bg-white rounded-[6px] font-medium pl-4 pr-4 text-neutral-900 transition-colors flex items-center gap-x-1 justify-center border-[1px] border-neutral-200 outline-none hover:bg-neutral-100 disabled:opacity-[0.7] disabled:pointer-events-none dark:text-white dark:border-neutral-800 dark:bg-transparent dark:hover:bg-neutral-800"
    :style="{
      fontSize: buttonStyles?.fontSize,
      minHeight: buttonStyles?.height,
    }"
    v-else-if="props?.type === 'outline'"
    :disabled="props.disabled"
    :class="{ 'pointer-events-none opacity-70': props.loading }"
    type="button"
    test="true"
    @click="emit('click', $event)"
  >
    <slot v-if="props?.loading" name="loading"
      ><Icon name="eos-icons:loading" size="15"
    /></slot>
    <slot v-else
      ><Icon v-if="props.leftIcon" :name="props.leftIcon" size="13" />
      <span>{{ props.label }}</span>
      <Icon v-if="props?.rightIcon" :name="props?.rightIcon" size="13"
    /></slot>
  </button>
</template>
