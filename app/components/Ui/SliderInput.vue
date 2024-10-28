<script setup lang="ts">
interface Props {
  max?: number;
  min?: number;
  step?: number;
}

const props = withDefaults(defineProps<Props>(), {
  max: 100,
  min: 0,
  step: 1,
});

const modelValue = defineModel<number>('modelValue', { default: 50 });

const emits = defineEmits<{ change: [value: number] }>();

const handlePressed = ref<boolean>(false);

const sliderEl = ref();

function handleSlide(event: MouseEvent) {
  const slider = sliderEl?.value as HTMLElement;
  const sliderRect = slider.getBoundingClientRect();
  const newValue = ((event.clientX - sliderRect.left) / sliderRect.width) * 100;
  const steppedValue =
    Math.round(
      Math.max(props?.min, Math.min(props?.max, newValue)) / props.step,
    ) * props.step;

  modelValue.value = steppedValue;

  emits('change', steppedValue);
}

function handleClick(event: MouseEvent) {
  handleSlide(event);
}
</script>

<template>
  <div
    class="flex items-center relative h-5"
    ref="sliderEl"
    @click="handleClick"
  >
    <Teleport v-if="handlePressed" to="body"
      ><div
        class="flex fixed top-0 left-0 bottom-0 right-0 z-[10]"
        @mousemove="handleSlide($event)"
        @mouseup="handlePressed = false"
        @mouseout="handlePressed = false"
      ></div
    ></Teleport>
    <div
      class="flex absolute min-w-5 min-h-5 rounded-[999px] border-2 border-neutral-900 bg-white cursor-pointer dark:border-white dark:bg-neutral-900"
      :style="{ left: `calc(${modelValue}% - 4px)` }"
      @mousedown="handlePressed = true"
      @mouseup="handlePressed = false"
    ></div>
    <div
      class="h-2 rounded-[99px] bg-neutral-200 w-full dark:bg-neutral-800 overflow-hidden"
    >
      <div
        class="flex h-full bg-neutral-900 dark:bg-white"
        :style="{ width: `${modelValue}%` }"
      ></div>
    </div>
  </div>
</template>
