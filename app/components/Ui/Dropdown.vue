<script setup lang="ts">
interface Props {
  distance?: number;
  dropdownWidth?: number;
  options?: any[];
  placement?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'left-start'
    | 'left-end'
    | 'right-start'
    | 'right-end';
  selected?: number;
  trigger?: 'click' | 'hover';
}

const props = withDefaults(defineProps<Props>(), {
  distance: 6,
  options: [
    {
      label: 'Option 1',
      value: 1,
    },
    {
      label: 'Option 2',
      value: 2,
    },
  ],
  placement: 'right-start',
});

const emit = defineEmits<{ select: [index: number] }>();

const ariaId = useId();

function handleSelect(option: any, index: number) {
  if (option?.onSelect && typeof option?.onSelect === 'function') {
    option.onSelect();
  }

  emit('select', index);
}
</script>

<template>
  <component
    :is="props?.trigger === 'hover' ? 'VMenu' : 'VDropdown'"
    :distance="props?.distance"
    :placement="props.placement"
    :aria-id="ariaId"
    ><slot
      ><div
        class="text-sm pl-2 pr-2 border-[1px] border-neutral-200 rounded-[6px] outline-none min-h-8 bg-zinc-50 border-solid text-neutral-900 flex items-center cursor-pointer justify-between gap-x-2 dark:bg-neutral-900 dark:text-neutral-100 dark:border-solid dark:border-[1px] dark:border-neutral-800 hover:bg-neutral-100 hover:border-solid hover:border-neutral-300 hover:border-[1px] dark:hover:bg-neutral-800 dark:hover:border-solid dark:hover:border-neutral-700 dark:hover:border-[1px]"
      >
        <Icon
          class="min-w-4 min-h-4 text-neutral-400"
          name="heroicons:bars-3-16-solid"
          size="15"
        /></div
    ></slot>
    <template #popper
      ><div
        class="flex flex-col gap-y-0.5 text-neutral-700 text-sm p-0.5 dark:text-neutral-300 overflow-auto"
        :style="{
          width: props?.dropdownWidth
            ? `${props?.dropdownWidth}px`
            : 'fit-content',
        }"
      >
        <slot name="dropdown"
          ><div
            class="flex min-h-7 items-center pl-2 pr-2 cursor-pointer rounded-[4px] gap-x-3 justify-between hover:bg-neutral-100 dark:hover:bg-neutral-800 group"
            v-for="(option, i) in props.options"
            :key="
              ['string', 'number'].includes(typeof option)
                ? option
                : option?.label
            "
            v-close-popper
            :class="
              props?.selected === i
                ? 'bg-neutral-100 dark:bg-neutral-800 active-option'
                : ''
            "
            @click="handleSelect(option, i)"
          >
            <div class="flex items-center gap-x-1">
              <Icon
                class="min-w-3.5 min-h-3.5"
                v-if="option?.icon"
                :name="option?.icon"
                size="13"
              />
              <span>{{ option?.label || option }}</span>
            </div>
            <Icon
              class="min-w-3.5 min-h-3.5 hidden group-[.active-option]:block"
              name="heroicons:check"
              size="13"
            /></div
        ></slot></div></template
  ></component>
</template>

<style>
.v-popper--theme-dropdown .v-popper__inner {
  @apply bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800;
}

.v-popper--theme-dropdown .v-popper__arrow-outer {
  visibility: hidden;
}

.v-popper--theme-dropdown .v-popper__arrow-inner {
  visibility: hidden;
}
</style>
