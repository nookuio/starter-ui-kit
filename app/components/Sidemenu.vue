<script setup lang="ts">
interface Props {
  position?: 'left' | 'right';
}

const props = withDefaults(defineProps<Props>(), {
  position: 'left',
});

const open = defineModel<boolean>('open', { default: true, required: true });

const emits = defineEmits<{ close: [] }>();
</script>

<template>
  <div
    class="fixed top-0 bottom-0 left-0 right-0 bg-[#E5E5E570] dark:bg-[#40404050]"
    :style="{
      display: open ? 'flex' : 'none',
      justifyContent: props?.position === 'right' ? 'end' : 'start',
      pointerEvents: open ? 'auto' : 'none',
    }"
    @click="
      open = false;
      emits('close');
    "
  >
    <UiAnimationContainer
      :type="props?.position === 'left' ? 'slideLeft' : 'slideRight'"
      ><div
        class="flex static top-0 bottom-0 w-[300px] bg-white flex-col border-neutral-200 dark:border-neutral-800 dark:bg-neutral-900"
        :style="{ right: props?.position === 'right' ? '0px' : undefined }"
        v-if="open"
        :class="{
          'border-r': props?.position === 'left',
          'border-l': props?.position === 'right',
        }"
        @click.stop.prevent
      >
        <slot /></div
    ></UiAnimationContainer>
  </div>
</template>
