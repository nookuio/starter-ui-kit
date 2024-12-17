<script setup lang="ts">
interface Props {
  options?: ({ label: string; icon?: string } | string | number)[];
  size?: 'small' | 'medium' | 'large';
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium',
});

const selected = defineModel<number>('selected', { default: 0 });

const emits = defineEmits<{ select: [number] }>();

const tabWidth = computed(() => `${100 / props.options?.length}%`);

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

const marginLeft = computed(() => {
  const width = 100 / props.options?.length;

  return `${width * selected?.value}%`;
});
</script>

<template>
  <div
    class="border border-[#E5E5E540] rounded-md outline-none bg-neutral-100 border-solid text-neutral-500 cursor-pointer flex items-center p-px dark:bg-neutral-900 dark:text-neutral-400 dark:border-solid dark:border dark:border-neutral-800"
    :style="{
      minHeight: styles?.height,
      height: styles?.height,
      fontSize: styles?.fontSize,
    }"
  >
    <div class="flex items-center w-full relative h-full">
      <div
        class="flex items-center justify-center rounded min-w-fit h-full"
        v-for="(option, index) in props.options"
        :key="option?.label"
        :style="{ width: `${100 / props.options?.length}%` }"
        :class="{
          'text-neutral-900 dark:text-neutral-100': selected === index,
        }"
        @click="
          selected = index;
          emits('select', index);
        "
      >
        <div
          class="flex items-center gap-x-1 z-[1] w-full justify-center h-full"
        >
          <Icon
            class="min-w-3.5 min-h-3.5"
            v-if="option?.icon"
            :name="option?.icon"
            size="13"
          /><span>{{
            typeof option === 'object' ? option?.label : option
          }}</span>
        </div>
      </div>
      <div
        class="flex items-center justify-center rounded absolute bg-white transition-all pl-3 pr-3 shadow-neutral-300 border-solid border border-neutral-100 top-0 bottom-0 shadow-[0px_2px_5px_-1px] dark:bg-neutral-800 dark:shadow-neutral-900 dark:border-solid dark:border-[#40404030] dark:border"
        :style="{ width: tabWidth, left: marginLeft }"
      ></div>
    </div>
  </div>
</template>
