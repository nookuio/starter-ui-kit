<script setup lang="ts">
interface Props {
  options?: any;
}

const props = defineProps<Props>();

const selected = defineModel<number>('selected', { default: 0 });

const emits = defineEmits<{ select: [index] }>();

const tabWidth = computed<any>(() => {
  return `${100 / props.options?.length}%`;
});

const marginLeft = computed<any>(() => {
  const width = 100 / props.options?.length;
  return `${width * selected?.value}%`;
});
</script>

<template>
  <div
    class="text-sm border-[1px] border-[#E5E5E540] rounded-[6px] outline-none min-h-8 bg-neutral-100 border-solid text-neutral-500 cursor-pointer flex items-center p-0.5 h-8 dark:bg-neutral-900 dark:text-neutral-400 dark:border-solid dark:border-[1px] dark:border-neutral-800"
  >
    <div class="flex items-center w-full relative h-7">
      <div
        class="flex items-center justify-center rounded-[4px] min-w-fit min-h-7"
        :style="{ width: `${100 / props.options?.length}%` }"
        v-for="(option, index) in props.options"
        :key="option?.label"
        :class="{
          'text-neutral-900 dark:text-neutral-100': selected === index,
        }"
        @click="
          selected = index;
          emits('select', index);
        "
      >
        <div class="flex items-center gap-x-1 z-[1] w-full justify-center h-7">
          <Icon
            class="min-w-3.5 min-h-3.5"
            v-if="option?.icon"
            :name="option?.icon"
            size="13"
          />
          <span>{{ typeof option === 'object' ? option?.label : option }}</span>
        </div>
      </div>
      <div
        class="flex items-center justify-center rounded-[4px] absolute bg-white transition-all pl-3 pr-3 shadow-neutral-300 border-solid border-[1px] border-neutral-100 top-0 bottom-0 shadow-[0px_2px_5px_-1px] dark:bg-neutral-800 dark:shadow-neutral-900 dark:border-solid dark:border-[#40404030] dark:border-[1px]"
        :style="{ width: tabWidth, left: marginLeft }"
      ></div>
    </div>
  </div>
</template>
