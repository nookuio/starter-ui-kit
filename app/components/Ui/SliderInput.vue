<script setup lang="ts">
interface Props {
  disabled?: boolean;
  max?: number;
  min?: number;
  size?: 'small' | 'medium' | 'large';
  step?: number;
}

const props = withDefaults(defineProps<Props>(), {
  max: 100,
  min: 0,
  size: 'medium',
  step: 1,
});

const value = defineModel<number>('value', { default: 50 });

const handlePressed = ref<boolean>(false);

const sliderEl = ref();

const styles = computed(() => {
  switch (props?.size) {
    case 'small': {
      return { height: '6px', handle: '18px' };
    }

    case 'medium': {
      return { height: '8px', handle: '22px' };
    }

    case 'large': {
      return { height: '10px', handle: '25px' };
    }
  }
});

function handleSlide(event: MouseEvent) {
  const slider = sliderEl?.value as HTMLElement;
  const sliderRect = slider.getBoundingClientRect();
  const newValue = ((event.clientX - sliderRect.left) / sliderRect.width) * 100;
  const steppedValue =
    Math.round(
      Math.max(props?.min, Math.min(props?.max, newValue)) / props.step,
    ) * props.step;

  value.value = steppedValue;
}

function handleClick(event: MouseEvent) {
  handleSlide(event);
}
</script>

<template>
  <div
    class="flex items-center relative h-5"
    ref="sliderEl"
    :class="
      props.disabled ? 'opacity-70 pointer-events-none cursor-not-allowed' : ''
    "
    @click="handleClick"
  >
    <Teleport v-if="handlePressed" to="body"
      ><div
        class="flex fixed top-0 left-0 bottom-0 right-0 z-50"
        @mousemove="handleSlide($event)"
        @mouseup="handlePressed = false"
        @mouseout="handlePressed = false"
      ></div
    ></Teleport>
    <div
      class="flex absolute rounded-[999px] border-2 border-neutral-900 bg-white cursor-pointer dark:border-white dark:bg-neutral-900"
      :style="{
        left: `calc(${value}% - 4px)`,
        minWidth: styles?.handle,
        minHeight: styles?.handle,
      }"
      @mousedown="handlePressed = true"
      @mouseup="handlePressed = false"
    ></div>
    <div
      class="rounded-[99px] bg-neutral-200 w-full overflow-hidden dark:bg-neutral-800"
      :style="{ height: styles?.height, minHeight: styles?.height }"
    >
      <div
        class="flex h-full bg-neutral-900 dark:bg-white"
        :style="{ width: `${value}%` }"
      ></div>
    </div>
  </div>
</template>
